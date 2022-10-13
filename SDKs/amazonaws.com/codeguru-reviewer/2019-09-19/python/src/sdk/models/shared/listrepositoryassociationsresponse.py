from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import repositoryassociationsummary


@dataclass_json
@dataclass
class ListRepositoryAssociationsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    repository_association_summaries: Optional[List[repositoryassociationsummary.RepositoryAssociationSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepositoryAssociationSummaries' }})
    
