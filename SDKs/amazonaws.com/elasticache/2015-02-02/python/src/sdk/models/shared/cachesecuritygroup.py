from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CacheSecurityGroup:
    r"""CacheSecurityGroup
    <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>AuthorizeCacheSecurityGroupIngress</code> </p> </li> <li> <p> <code>CreateCacheSecurityGroup</code> </p> </li> <li> <p> <code>RevokeCacheSecurityGroupIngress</code> </p> </li> </ul>
    """
    
    arn: Optional[str] = field(default=None)
    cache_security_group_name: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    ec2_security_groups: Optional[List[Ec2SecurityGroup]] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    
