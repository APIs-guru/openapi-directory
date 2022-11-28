from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class SetSubnetsOutput:
    availability_zones: Optional[List[AvailabilityZone]] = field(default=None)
    ip_address_type: Optional[IPAddressTypeEnum] = field(default=None)
    
