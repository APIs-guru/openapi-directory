from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListDomainAssociationsResult:
    r"""ListDomainAssociationsResult
     The result structure for the list domain association request. 
    """
    
    domain_associations: List[DomainAssociation] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainAssociations') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
