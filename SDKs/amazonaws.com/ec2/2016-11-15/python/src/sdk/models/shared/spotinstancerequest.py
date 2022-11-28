from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class SpotInstanceRequest:
    r"""SpotInstanceRequest
    Describes a Spot Instance request.
    """
    
    actual_block_hourly_price: Optional[str] = field(default=None)
    availability_zone_group: Optional[str] = field(default=None)
    block_duration_minutes: Optional[int] = field(default=None)
    create_time: Optional[datetime] = field(default=None)
    fault: Optional[SpotInstanceStateFault] = field(default=None)
    instance_id: Optional[str] = field(default=None)
    instance_interruption_behavior: Optional[InstanceInterruptionBehaviorEnum] = field(default=None)
    launch_group: Optional[str] = field(default=None)
    launch_specification: Optional[LaunchSpecification] = field(default=None)
    launched_availability_zone: Optional[str] = field(default=None)
    product_description: Optional[RiProductDescriptionEnum] = field(default=None)
    spot_instance_request_id: Optional[str] = field(default=None)
    spot_price: Optional[str] = field(default=None)
    state: Optional[SpotInstanceStateEnum] = field(default=None)
    status: Optional[SpotInstanceStatus] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    type: Optional[SpotInstanceTypeEnum] = field(default=None)
    valid_from: Optional[datetime] = field(default=None)
    valid_until: Optional[datetime] = field(default=None)
    
