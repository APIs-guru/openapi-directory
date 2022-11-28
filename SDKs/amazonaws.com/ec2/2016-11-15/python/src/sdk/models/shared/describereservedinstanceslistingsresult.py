from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeReservedInstancesListingsResult:
    r"""DescribeReservedInstancesListingsResult
    Contains the output of DescribeReservedInstancesListings.
    """
    
    reserved_instances_listings: Optional[List[ReservedInstancesListing]] = field(default=None)
    
