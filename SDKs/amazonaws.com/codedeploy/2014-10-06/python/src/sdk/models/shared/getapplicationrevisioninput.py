from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import revisionlocation


@dataclass_json
@dataclass
class GetApplicationRevisionInput:
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationName' }})
    revision: revisionlocation.RevisionLocation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    
