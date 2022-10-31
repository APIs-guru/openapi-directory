from dataclasses import dataclass, field
from typing import Enum,Optional

class GetConfigureHealthCheckActionEnum(str, Enum):
    CONFIGURE_HEALTH_CHECK = "ConfigureHealthCheck"


@dataclass
class GetConfigureHealthCheckHealthCheck:
    healthy_threshold: int = field(default=None, metadata={'query_param': { 'field_name': 'HealthyThreshold' }})
    interval: int = field(default=None, metadata={'query_param': { 'field_name': 'Interval' }})
    target: str = field(default=None, metadata={'query_param': { 'field_name': 'Target' }})
    timeout: int = field(default=None, metadata={'query_param': { 'field_name': 'Timeout' }})
    unhealthy_threshold: int = field(default=None, metadata={'query_param': { 'field_name': 'UnhealthyThreshold' }})
    
class GetConfigureHealthCheckVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_06_01 = "2012-06-01"


@dataclass
class GetConfigureHealthCheckQueryParams:
    action: GetConfigureHealthCheckActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    health_check: GetConfigureHealthCheckHealthCheck = field(default=None, metadata={'query_param': { 'field_name': 'HealthCheck', 'style': 'form', 'explode': True }})
    load_balancer_name: str = field(default=None, metadata={'query_param': { 'field_name': 'LoadBalancerName', 'style': 'form', 'explode': True }})
    version: GetConfigureHealthCheckVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConfigureHealthCheckHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConfigureHealthCheckRequest:
    query_params: GetConfigureHealthCheckQueryParams = field(default=None)
    headers: GetConfigureHealthCheckHeaders = field(default=None)
    

@dataclass
class GetConfigureHealthCheckResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
