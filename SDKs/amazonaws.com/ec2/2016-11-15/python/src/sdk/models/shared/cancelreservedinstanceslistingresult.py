from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CancelReservedInstancesListingResult:
    r"""CancelReservedInstancesListingResult
    Contains the output of CancelReservedInstancesListing.
    """
    
    reserved_instances_listings: Optional[List[ReservedInstancesListing]] = field(default=None)
    
