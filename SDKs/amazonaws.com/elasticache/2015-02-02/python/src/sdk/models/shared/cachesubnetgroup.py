from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CacheSubnetGroup:
    r"""CacheSubnetGroup
    <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>CreateCacheSubnetGroup</code> </p> </li> <li> <p> <code>ModifyCacheSubnetGroup</code> </p> </li> </ul>
    """
    
    arn: Optional[str] = field(default=None)
    cache_subnet_group_description: Optional[str] = field(default=None)
    cache_subnet_group_name: Optional[str] = field(default=None)
    subnets: Optional[List[Subnet]] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
