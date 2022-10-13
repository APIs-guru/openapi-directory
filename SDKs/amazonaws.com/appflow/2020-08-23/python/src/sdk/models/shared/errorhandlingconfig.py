from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ErrorHandlingConfig:
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketName' }})
    bucket_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketPrefix' }})
    fail_on_first_destination_error: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failOnFirstDestinationError' }})
    
