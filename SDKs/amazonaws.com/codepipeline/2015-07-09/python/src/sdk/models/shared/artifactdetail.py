from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import s3location


@dataclass_json
@dataclass
class ArtifactDetail:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    s3location: Optional[s3location.S3Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3location' }})
    
