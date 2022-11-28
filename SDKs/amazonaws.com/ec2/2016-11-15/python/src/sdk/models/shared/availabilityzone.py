from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class AvailabilityZone:
    r"""AvailabilityZone
    Describes Availability Zones, Local Zones, and Wavelength Zones.
    """
    
    group_name: Optional[str] = field(default=None)
    messages: Optional[List[AvailabilityZoneMessage]] = field(default=None)
    network_border_group: Optional[str] = field(default=None)
    opt_in_status: Optional[AvailabilityZoneOptInStatusEnum] = field(default=None)
    parent_zone_id: Optional[str] = field(default=None)
    parent_zone_name: Optional[str] = field(default=None)
    region_name: Optional[str] = field(default=None)
    state: Optional[AvailabilityZoneStateEnum] = field(default=None)
    zone_id: Optional[str] = field(default=None)
    zone_name: Optional[str] = field(default=None)
    zone_type: Optional[str] = field(default=None)
    
