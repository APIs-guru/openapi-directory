from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Artifact:
    artifact_file_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifactFileName' }})
    artifact_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifactId' }})
    
