from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class ServiceDetail:
    r"""ServiceDetail
    Describes a VPC endpoint service.
    """
    
    acceptance_required: Optional[bool] = field(default=None)
    availability_zones: Optional[List[str]] = field(default=None)
    base_endpoint_dns_names: Optional[List[str]] = field(default=None)
    manages_vpc_endpoints: Optional[bool] = field(default=None)
    owner: Optional[str] = field(default=None)
    private_dns_name: Optional[str] = field(default=None)
    private_dns_name_verification_state: Optional[DNSNameStateEnum] = field(default=None)
    private_dns_names: Optional[List[PrivateDNSDetails]] = field(default=None)
    service_id: Optional[str] = field(default=None)
    service_name: Optional[str] = field(default=None)
    service_type: Optional[List[ServiceTypeDetail]] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    vpc_endpoint_policy_supported: Optional[bool] = field(default=None)
    
