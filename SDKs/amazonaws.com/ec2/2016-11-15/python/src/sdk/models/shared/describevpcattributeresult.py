from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DescribeVpcAttributeResult:
    enable_dns_hostnames: Optional[AttributeBooleanValue] = field(default=None)
    enable_dns_support: Optional[AttributeBooleanValue] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
