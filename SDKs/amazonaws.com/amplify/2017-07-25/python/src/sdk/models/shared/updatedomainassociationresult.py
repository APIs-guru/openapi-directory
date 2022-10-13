from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import domainassociation


@dataclass_json
@dataclass
class UpdateDomainAssociationResult:
    domain_association: domainassociation.DomainAssociation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainAssociation' }})
    
