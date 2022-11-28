from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class PrivateDNSNameConfiguration:
    r"""PrivateDNSNameConfiguration
    Information about the private DNS name for the service endpoint. For more information about these parameters, see <a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/ndpoint-services-dns-validation.html\">VPC Endpoint Service Private DNS Name Verification</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.
    """
    
    name: Optional[str] = field(default=None)
    state: Optional[DNSNameStateEnum] = field(default=None)
    type: Optional[str] = field(default=None)
    value: Optional[str] = field(default=None)
    
