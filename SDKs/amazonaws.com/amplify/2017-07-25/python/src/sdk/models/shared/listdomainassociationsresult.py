from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import domainassociation


@dataclass_json
@dataclass
class ListDomainAssociationsResult:
    domain_associations: List[domainassociation.DomainAssociation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainAssociations' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
