from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbInstanceMessage:
    r"""DbInstanceMessage
    Represents the output of <a>DescribeDBInstances</a>.
    """
    
    db_instances: Optional[List[DbInstance]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
