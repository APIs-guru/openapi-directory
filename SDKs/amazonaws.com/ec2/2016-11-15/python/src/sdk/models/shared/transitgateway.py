from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class TransitGateway:
    r"""TransitGateway
    Describes a transit gateway.
    """
    
    creation_time: Optional[datetime] = field(default=None)
    description: Optional[str] = field(default=None)
    options: Optional[TransitGatewayOptions] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    state: Optional[TransitGatewayStateEnum] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    transit_gateway_arn: Optional[str] = field(default=None)
    transit_gateway_id: Optional[str] = field(default=None)
    
