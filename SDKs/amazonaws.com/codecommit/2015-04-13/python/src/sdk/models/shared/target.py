from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Target:
    destination_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationReference' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    source_reference: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceReference' }})
    
