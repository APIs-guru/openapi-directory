from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetDisableAvailabilityZonesForLoadBalancerActionEnum(str, Enum):
    DISABLE_AVAILABILITY_ZONES_FOR_LOAD_BALANCER = "DisableAvailabilityZonesForLoadBalancer"

class GetDisableAvailabilityZonesForLoadBalancerVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_06_01 = "2012-06-01"


@dataclass
class GetDisableAvailabilityZonesForLoadBalancerQueryParams:
    action: GetDisableAvailabilityZonesForLoadBalancerActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    availability_zones: List[str] = field(metadata={'query_param': { 'field_name': 'AvailabilityZones', 'style': 'form', 'explode': True }})
    load_balancer_name: str = field(metadata={'query_param': { 'field_name': 'LoadBalancerName', 'style': 'form', 'explode': True }})
    version: GetDisableAvailabilityZonesForLoadBalancerVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDisableAvailabilityZonesForLoadBalancerHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDisableAvailabilityZonesForLoadBalancerRequest:
    headers: GetDisableAvailabilityZonesForLoadBalancerHeaders = field()
    query_params: GetDisableAvailabilityZonesForLoadBalancerQueryParams = field()
    

@dataclass
class GetDisableAvailabilityZonesForLoadBalancerResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
