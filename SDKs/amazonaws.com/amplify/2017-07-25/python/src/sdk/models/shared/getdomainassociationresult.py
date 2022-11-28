from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetDomainAssociationResult:
    r"""GetDomainAssociationResult
     The result structure for the get domain association request. 
    """
    
    domain_association: DomainAssociation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainAssociation') }})
    
