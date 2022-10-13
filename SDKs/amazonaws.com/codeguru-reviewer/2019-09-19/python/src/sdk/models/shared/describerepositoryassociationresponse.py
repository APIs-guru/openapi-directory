from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import repositoryassociation


@dataclass_json
@dataclass
class DescribeRepositoryAssociationResponse:
    repository_association: Optional[repositoryassociation.RepositoryAssociation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepositoryAssociation' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
