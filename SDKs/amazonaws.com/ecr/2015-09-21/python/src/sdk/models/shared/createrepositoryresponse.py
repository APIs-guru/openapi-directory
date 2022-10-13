from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import repository


@dataclass_json
@dataclass
class CreateRepositoryResponse:
    repository: Optional[repository.Repository] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    
