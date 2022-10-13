from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import revisionlocation
from . import genericrevisioninfo


@dataclass_json
@dataclass
class GetApplicationRevisionOutput:
    application_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationName' }})
    revision: Optional[revisionlocation.RevisionLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    revision_info: Optional[genericrevisioninfo.GenericRevisionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionInfo' }})
    
