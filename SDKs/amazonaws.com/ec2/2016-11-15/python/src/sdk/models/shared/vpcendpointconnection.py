from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class VpcEndpointConnection:
    r"""VpcEndpointConnection
    Describes a VPC endpoint connection to a service.
    """
    
    creation_timestamp: Optional[datetime] = field(default=None)
    dns_entries: Optional[List[DNSEntry]] = field(default=None)
    gateway_load_balancer_arns: Optional[List[str]] = field(default=None)
    network_load_balancer_arns: Optional[List[str]] = field(default=None)
    service_id: Optional[str] = field(default=None)
    vpc_endpoint_id: Optional[str] = field(default=None)
    vpc_endpoint_owner: Optional[str] = field(default=None)
    vpc_endpoint_state: Optional[StateEnum] = field(default=None)
    
