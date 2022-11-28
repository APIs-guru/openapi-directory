from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class ServiceConfiguration:
    r"""ServiceConfiguration
    Describes a service configuration for a VPC endpoint service.
    """
    
    acceptance_required: Optional[bool] = field(default=None)
    availability_zones: Optional[List[str]] = field(default=None)
    base_endpoint_dns_names: Optional[List[str]] = field(default=None)
    gateway_load_balancer_arns: Optional[List[str]] = field(default=None)
    manages_vpc_endpoints: Optional[bool] = field(default=None)
    network_load_balancer_arns: Optional[List[str]] = field(default=None)
    private_dns_name: Optional[str] = field(default=None)
    private_dns_name_configuration: Optional[PrivateDNSNameConfiguration] = field(default=None)
    service_id: Optional[str] = field(default=None)
    service_name: Optional[str] = field(default=None)
    service_state: Optional[ServiceStateEnum] = field(default=None)
    service_type: Optional[List[ServiceTypeDetail]] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
