from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GetManagedPrefixListAssociationsResult:
    next_token: Optional[str] = field(default=None)
    prefix_list_associations: Optional[List[PrefixListAssociation]] = field(default=None)
    
