from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CustomerGateway:
    r"""CustomerGateway
    Describes a customer gateway.
    """
    
    bgp_asn: Optional[str] = field(default=None)
    certificate_arn: Optional[str] = field(default=None)
    customer_gateway_id: Optional[str] = field(default=None)
    device_name: Optional[str] = field(default=None)
    ip_address: Optional[str] = field(default=None)
    state: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    type: Optional[str] = field(default=None)
    
