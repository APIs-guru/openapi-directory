from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class OrderableDbInstanceOptionsMessage:
    r"""OrderableDbInstanceOptionsMessage
    Represents the output of <a>DescribeOrderableDBInstanceOptions</a>.
    """
    
    marker: Optional[str] = field(default=None)
    orderable_db_instance_options: Optional[List[OrderableDbInstanceOption]] = field(default=None)
    
