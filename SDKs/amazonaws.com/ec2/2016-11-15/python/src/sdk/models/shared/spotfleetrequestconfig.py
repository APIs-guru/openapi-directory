from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class SpotFleetRequestConfig:
    r"""SpotFleetRequestConfig
    Describes a Spot Fleet request.
    """
    
    activity_status: Optional[ActivityStatusEnum] = field(default=None)
    create_time: Optional[datetime] = field(default=None)
    spot_fleet_request_config: Optional[SpotFleetRequestConfigData] = field(default=None)
    spot_fleet_request_id: Optional[str] = field(default=None)
    spot_fleet_request_state: Optional[BatchStateEnum] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
