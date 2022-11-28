from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class NetworkACL:
    r"""NetworkACL
    Describes a network ACL.
    """
    
    associations: Optional[List[NetworkACLAssociation]] = field(default=None)
    entries: Optional[List[NetworkACLEntry]] = field(default=None)
    is_default: Optional[bool] = field(default=None)
    network_acl_id: Optional[str] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
