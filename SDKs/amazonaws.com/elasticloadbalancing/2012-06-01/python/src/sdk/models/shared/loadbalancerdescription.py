from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class LoadBalancerDescription:
    r"""LoadBalancerDescription
    Information about a load balancer.
    """
    
    availability_zones: Optional[List[str]] = field(default=None)
    backend_server_descriptions: Optional[List[BackendServerDescription]] = field(default=None)
    canonical_hosted_zone_name: Optional[str] = field(default=None)
    canonical_hosted_zone_name_id: Optional[str] = field(default=None)
    created_time: Optional[datetime] = field(default=None)
    dns_name: Optional[str] = field(default=None)
    health_check: Optional[HealthCheck] = field(default=None)
    instances: Optional[List[Instance]] = field(default=None)
    listener_descriptions: Optional[List[ListenerDescription]] = field(default=None)
    load_balancer_name: Optional[str] = field(default=None)
    policies: Optional[Policies] = field(default=None)
    scheme: Optional[str] = field(default=None)
    security_groups: Optional[List[str]] = field(default=None)
    source_security_group: Optional[SourceSecurityGroup] = field(default=None)
    subnets: Optional[List[str]] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
