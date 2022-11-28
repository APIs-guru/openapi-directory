from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class TransitGatewayVpcAttachmentOptions:
    r"""TransitGatewayVpcAttachmentOptions
    Describes the VPC attachment options.
    """
    
    appliance_mode_support: Optional[ApplianceModeSupportValueEnum] = field(default=None)
    dns_support: Optional[DNSSupportValueEnum] = field(default=None)
    ipv6_support: Optional[Ipv6SupportValueEnum] = field(default=None)
    
