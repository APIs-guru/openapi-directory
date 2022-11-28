from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class Host:
    r"""Host
    Describes the properties of the Dedicated Host.
    """
    
    allocation_time: Optional[datetime] = field(default=None)
    allows_multiple_instance_types: Optional[AllowsMultipleInstanceTypesEnum] = field(default=None)
    auto_placement: Optional[AutoPlacementEnum] = field(default=None)
    availability_zone: Optional[str] = field(default=None)
    availability_zone_id: Optional[str] = field(default=None)
    available_capacity: Optional[AvailableCapacity] = field(default=None)
    client_token: Optional[str] = field(default=None)
    host_id: Optional[str] = field(default=None)
    host_properties: Optional[HostProperties] = field(default=None)
    host_recovery: Optional[HostRecoveryEnum] = field(default=None)
    host_reservation_id: Optional[str] = field(default=None)
    instances: Optional[List[HostInstance]] = field(default=None)
    member_of_service_linked_resource_group: Optional[bool] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    release_time: Optional[datetime] = field(default=None)
    state: Optional[AllocationStateEnum] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
