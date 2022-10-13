from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import s3artifactlocation
from . import artifactlocationtype_enum


@dataclass_json
@dataclass
class ArtifactLocation:
    s3_location: Optional[s3artifactlocation.S3ArtifactLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Location' }})
    type: Optional[artifactlocationtype_enum.ArtifactLocationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
