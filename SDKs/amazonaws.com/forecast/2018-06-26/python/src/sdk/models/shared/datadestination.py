from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import s3config


@dataclass_json
@dataclass
class DataDestination:
    s3_config: s3config.S3Config = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Config' }})
    
