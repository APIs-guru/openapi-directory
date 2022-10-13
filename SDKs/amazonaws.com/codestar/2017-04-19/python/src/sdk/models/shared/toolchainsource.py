from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import s3location


@dataclass_json
@dataclass
class ToolchainSource:
    s3: s3location.S3Location = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3' }})
    
