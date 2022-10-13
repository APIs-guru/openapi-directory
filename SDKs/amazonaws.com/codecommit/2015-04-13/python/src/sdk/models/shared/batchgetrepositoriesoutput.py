from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import repositorymetadata


@dataclass_json
@dataclass
class BatchGetRepositoriesOutput:
    repositories: Optional[List[repositorymetadata.RepositoryMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositories' }})
    repositories_not_found: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoriesNotFound' }})
    
