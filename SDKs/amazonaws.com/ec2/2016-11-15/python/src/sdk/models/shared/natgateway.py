from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class NatGateway:
    r"""NatGateway
    Describes a NAT gateway.
    """
    
    connectivity_type: Optional[ConnectivityTypeEnum] = field(default=None)
    create_time: Optional[datetime] = field(default=None)
    delete_time: Optional[datetime] = field(default=None)
    failure_code: Optional[str] = field(default=None)
    failure_message: Optional[str] = field(default=None)
    nat_gateway_addresses: Optional[List[NatGatewayAddress]] = field(default=None)
    nat_gateway_id: Optional[str] = field(default=None)
    provisioned_bandwidth: Optional[ProvisionedBandwidth] = field(default=None)
    state: Optional[NatGatewayStateEnum] = field(default=None)
    subnet_id: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
