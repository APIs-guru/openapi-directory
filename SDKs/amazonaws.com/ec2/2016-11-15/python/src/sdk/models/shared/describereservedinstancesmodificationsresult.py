from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeReservedInstancesModificationsResult:
    r"""DescribeReservedInstancesModificationsResult
    Contains the output of DescribeReservedInstancesModifications.
    """
    
    next_token: Optional[str] = field(default=None)
    reserved_instances_modifications: Optional[List[ReservedInstancesModification]] = field(default=None)
    
