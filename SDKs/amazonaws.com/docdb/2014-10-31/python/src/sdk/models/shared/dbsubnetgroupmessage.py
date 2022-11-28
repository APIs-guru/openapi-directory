from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbSubnetGroupMessage:
    r"""DbSubnetGroupMessage
    Represents the output of <a>DescribeDBSubnetGroups</a>.
    """
    
    db_subnet_groups: Optional[List[DbSubnetGroup]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
