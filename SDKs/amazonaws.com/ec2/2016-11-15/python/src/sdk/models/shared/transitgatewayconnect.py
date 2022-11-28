from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class TransitGatewayConnect:
    r"""TransitGatewayConnect
    Describes a transit gateway Connect attachment.
    """
    
    creation_time: Optional[datetime] = field(default=None)
    options: Optional[TransitGatewayConnectOptions] = field(default=None)
    state: Optional[TransitGatewayAttachmentStateEnum] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    transit_gateway_attachment_id: Optional[str] = field(default=None)
    transit_gateway_id: Optional[str] = field(default=None)
    transport_transit_gateway_attachment_id: Optional[str] = field(default=None)
    
