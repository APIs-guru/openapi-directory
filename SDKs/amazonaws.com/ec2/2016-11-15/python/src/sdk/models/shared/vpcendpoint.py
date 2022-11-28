from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class VpcEndpoint:
    r"""VpcEndpoint
    Describes a VPC endpoint.
    """
    
    creation_timestamp: Optional[datetime] = field(default=None)
    dns_entries: Optional[List[DNSEntry]] = field(default=None)
    groups: Optional[List[SecurityGroupIdentifier]] = field(default=None)
    last_error: Optional[LastError] = field(default=None)
    network_interface_ids: Optional[List[str]] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    policy_document: Optional[str] = field(default=None)
    private_dns_enabled: Optional[bool] = field(default=None)
    requester_managed: Optional[bool] = field(default=None)
    route_table_ids: Optional[List[str]] = field(default=None)
    service_name: Optional[str] = field(default=None)
    state: Optional[StateEnum] = field(default=None)
    subnet_ids: Optional[List[str]] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    vpc_endpoint_id: Optional[str] = field(default=None)
    vpc_endpoint_type: Optional[VpcEndpointTypeEnum] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
