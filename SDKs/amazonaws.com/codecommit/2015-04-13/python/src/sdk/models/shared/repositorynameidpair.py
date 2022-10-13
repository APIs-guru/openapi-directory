from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RepositoryNameIDPair:
    repository_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryId' }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
