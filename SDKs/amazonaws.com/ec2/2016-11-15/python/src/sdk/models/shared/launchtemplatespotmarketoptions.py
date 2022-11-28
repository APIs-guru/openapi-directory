from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class LaunchTemplateSpotMarketOptions:
    r"""LaunchTemplateSpotMarketOptions
    The options for Spot Instances.
    """
    
    block_duration_minutes: Optional[int] = field(default=None)
    instance_interruption_behavior: Optional[InstanceInterruptionBehaviorEnum] = field(default=None)
    max_price: Optional[str] = field(default=None)
    spot_instance_type: Optional[SpotInstanceTypeEnum] = field(default=None)
    valid_until: Optional[datetime] = field(default=None)
    
