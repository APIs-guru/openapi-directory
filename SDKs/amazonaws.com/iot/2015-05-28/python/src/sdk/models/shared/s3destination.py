from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class S3Destination:
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucket' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix' }})
    
