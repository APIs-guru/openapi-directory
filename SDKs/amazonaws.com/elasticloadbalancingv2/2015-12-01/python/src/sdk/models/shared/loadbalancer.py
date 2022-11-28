from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class LoadBalancer:
    r"""LoadBalancer
    Information about a load balancer.
    """
    
    availability_zones: Optional[List[AvailabilityZone]] = field(default=None)
    canonical_hosted_zone_id: Optional[str] = field(default=None)
    created_time: Optional[datetime] = field(default=None)
    customer_owned_ipv4_pool: Optional[str] = field(default=None)
    dns_name: Optional[str] = field(default=None)
    ip_address_type: Optional[IPAddressTypeEnum] = field(default=None)
    load_balancer_arn: Optional[str] = field(default=None)
    load_balancer_name: Optional[str] = field(default=None)
    scheme: Optional[LoadBalancerSchemeEnumEnum] = field(default=None)
    security_groups: Optional[List[str]] = field(default=None)
    state: Optional[LoadBalancerState] = field(default=None)
    type: Optional[LoadBalancerTypeEnumEnum] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
