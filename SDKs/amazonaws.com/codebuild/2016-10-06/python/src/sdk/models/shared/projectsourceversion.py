from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProjectSourceVersion:
    source_identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceIdentifier' }})
    source_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceVersion' }})
    
