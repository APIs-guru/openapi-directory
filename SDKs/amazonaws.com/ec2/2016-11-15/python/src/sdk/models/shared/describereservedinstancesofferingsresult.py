from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeReservedInstancesOfferingsResult:
    r"""DescribeReservedInstancesOfferingsResult
    Contains the output of DescribeReservedInstancesOfferings.
    """
    
    next_token: Optional[str] = field(default=None)
    reserved_instances_offerings: Optional[List[ReservedInstancesOffering]] = field(default=None)
    
