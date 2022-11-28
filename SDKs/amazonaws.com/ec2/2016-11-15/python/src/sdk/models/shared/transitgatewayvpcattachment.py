from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class TransitGatewayVpcAttachment:
    r"""TransitGatewayVpcAttachment
    Describes a VPC attachment.
    """
    
    creation_time: Optional[datetime] = field(default=None)
    options: Optional[TransitGatewayVpcAttachmentOptions] = field(default=None)
    state: Optional[TransitGatewayAttachmentStateEnum] = field(default=None)
    subnet_ids: Optional[List[str]] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    transit_gateway_attachment_id: Optional[str] = field(default=None)
    transit_gateway_id: Optional[str] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    vpc_owner_id: Optional[str] = field(default=None)
    
