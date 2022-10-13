from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import genericrevisioninfo
from . import revisionlocation


@dataclass_json
@dataclass
class RevisionInfo:
    generic_revision_info: Optional[genericrevisioninfo.GenericRevisionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'genericRevisionInfo' }})
    revision_location: Optional[revisionlocation.RevisionLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionLocation' }})
    
