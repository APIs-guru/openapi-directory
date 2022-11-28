from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class TransitGatewayAttachment:
    r"""TransitGatewayAttachment
    Describes an attachment between a resource and a transit gateway.
    """
    
    association: Optional[TransitGatewayAttachmentAssociation] = field(default=None)
    creation_time: Optional[datetime] = field(default=None)
    resource_id: Optional[str] = field(default=None)
    resource_owner_id: Optional[str] = field(default=None)
    resource_type: Optional[TransitGatewayAttachmentResourceTypeEnum] = field(default=None)
    state: Optional[TransitGatewayAttachmentStateEnum] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    transit_gateway_attachment_id: Optional[str] = field(default=None)
    transit_gateway_id: Optional[str] = field(default=None)
    transit_gateway_owner_id: Optional[str] = field(default=None)
    
