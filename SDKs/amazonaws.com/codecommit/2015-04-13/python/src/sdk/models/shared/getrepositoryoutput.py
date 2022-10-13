from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import repositorymetadata


@dataclass_json
@dataclass
class GetRepositoryOutput:
    repository_metadata: Optional[repositorymetadata.RepositoryMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryMetadata' }})
    
