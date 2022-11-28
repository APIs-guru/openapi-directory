from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class TransitGatewayMulticastDomain:
    r"""TransitGatewayMulticastDomain
    Describes the transit gateway multicast domain.
    """
    
    creation_time: Optional[datetime] = field(default=None)
    options: Optional[TransitGatewayMulticastDomainOptions] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    state: Optional[TransitGatewayMulticastDomainStateEnum] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    transit_gateway_id: Optional[str] = field(default=None)
    transit_gateway_multicast_domain_arn: Optional[str] = field(default=None)
    transit_gateway_multicast_domain_id: Optional[str] = field(default=None)
    
