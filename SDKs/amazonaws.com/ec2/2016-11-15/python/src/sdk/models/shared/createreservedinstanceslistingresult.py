from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CreateReservedInstancesListingResult:
    r"""CreateReservedInstancesListingResult
    Contains the output of CreateReservedInstancesListing.
    """
    
    reserved_instances_listings: Optional[List[ReservedInstancesListing]] = field(default=None)
    
