from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class CapacityReservation:
    r"""CapacityReservation
    Describes a Capacity Reservation.
    """
    
    availability_zone: Optional[str] = field(default=None)
    availability_zone_id: Optional[str] = field(default=None)
    available_instance_count: Optional[int] = field(default=None)
    capacity_reservation_arn: Optional[str] = field(default=None)
    capacity_reservation_id: Optional[str] = field(default=None)
    create_date: Optional[datetime] = field(default=None)
    ebs_optimized: Optional[bool] = field(default=None)
    end_date: Optional[datetime] = field(default=None)
    end_date_type: Optional[EndDateTypeEnum] = field(default=None)
    ephemeral_storage: Optional[bool] = field(default=None)
    instance_match_criteria: Optional[InstanceMatchCriteriaEnum] = field(default=None)
    instance_platform: Optional[CapacityReservationInstancePlatformEnum] = field(default=None)
    instance_type: Optional[str] = field(default=None)
    outpost_arn: Optional[str] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    start_date: Optional[datetime] = field(default=None)
    state: Optional[CapacityReservationStateEnum] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    tenancy: Optional[CapacityReservationTenancyEnum] = field(default=None)
    total_instance_count: Optional[int] = field(default=None)
    
