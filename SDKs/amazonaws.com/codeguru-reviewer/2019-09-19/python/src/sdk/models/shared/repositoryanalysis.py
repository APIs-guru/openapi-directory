from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import repositoryheadsourcecodetype
from . import sourcecodetype


@dataclass_json
@dataclass
class RepositoryAnalysis:
    repository_head: Optional[repositoryheadsourcecodetype.RepositoryHeadSourceCodeType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepositoryHead' }})
    source_code_type: Optional[sourcecodetype.SourceCodeType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceCodeType' }})
    
