from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import s3location
from . import stream


@dataclass_json
@dataclass
class FileLocation:
    s3_location: Optional[s3location.S3Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Location' }})
    stream: Optional[stream.Stream] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stream' }})
    
