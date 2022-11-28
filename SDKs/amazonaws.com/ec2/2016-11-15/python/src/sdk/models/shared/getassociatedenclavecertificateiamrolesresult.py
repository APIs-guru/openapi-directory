from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GetAssociatedEnclaveCertificateIamRolesResult:
    associated_roles: Optional[List[AssociatedRole]] = field(default=None)
    
