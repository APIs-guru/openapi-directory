from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import revisionlocation


@dataclass_json
@dataclass
class RegisterApplicationRevisionInput:
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    revision: revisionlocation.RevisionLocation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    
