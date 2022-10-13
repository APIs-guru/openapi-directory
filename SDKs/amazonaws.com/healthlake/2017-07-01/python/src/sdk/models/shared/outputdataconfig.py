from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import s3configuration


@dataclass_json
@dataclass
class OutputDataConfig:
    s3_configuration: Optional[s3configuration.S3Configuration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Configuration' }})
    
