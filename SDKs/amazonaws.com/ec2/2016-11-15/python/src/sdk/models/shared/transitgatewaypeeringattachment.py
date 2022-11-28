from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class TransitGatewayPeeringAttachment:
    r"""TransitGatewayPeeringAttachment
    Describes the transit gateway peering attachment.
    """
    
    accepter_tgw_info: Optional[PeeringTgwInfo] = field(default=None)
    creation_time: Optional[datetime] = field(default=None)
    requester_tgw_info: Optional[PeeringTgwInfo] = field(default=None)
    state: Optional[TransitGatewayAttachmentStateEnum] = field(default=None)
    status: Optional[PeeringAttachmentStatus] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    transit_gateway_attachment_id: Optional[str] = field(default=None)
    
