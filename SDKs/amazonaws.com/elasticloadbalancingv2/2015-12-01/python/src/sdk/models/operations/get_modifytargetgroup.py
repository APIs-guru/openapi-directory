from dataclasses import dataclass, field
from typing import Enum,Optional

class GetModifyTargetGroupActionEnum(str, Enum):
    MODIFY_TARGET_GROUP = "ModifyTargetGroup"

class GetModifyTargetGroupHealthCheckProtocolEnum(str, Enum):
    HTTP = "HTTP"
    HTTPS = "HTTPS"
    TCP = "TCP"
    TLS = "TLS"
    UDP = "UDP"
    TCP_UDP = "TCP_UDP"
    GENEVE = "GENEVE"


@dataclass
class GetModifyTargetGroupMatcher:
    grpc_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'GrpcCode' }})
    http_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'HttpCode' }})
    
class GetModifyTargetGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_12_01 = "2015-12-01"


@dataclass
class GetModifyTargetGroupQueryParams:
    action: GetModifyTargetGroupActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    health_check_enabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'HealthCheckEnabled', 'style': 'form', 'explode': True }})
    health_check_interval_seconds: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'HealthCheckIntervalSeconds', 'style': 'form', 'explode': True }})
    health_check_path: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'HealthCheckPath', 'style': 'form', 'explode': True }})
    health_check_port: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'HealthCheckPort', 'style': 'form', 'explode': True }})
    health_check_protocol: Optional[GetModifyTargetGroupHealthCheckProtocolEnum] = field(default=None, metadata={'query_param': { 'field_name': 'HealthCheckProtocol', 'style': 'form', 'explode': True }})
    health_check_timeout_seconds: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'HealthCheckTimeoutSeconds', 'style': 'form', 'explode': True }})
    healthy_threshold_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'HealthyThresholdCount', 'style': 'form', 'explode': True }})
    matcher: Optional[GetModifyTargetGroupMatcher] = field(default=None, metadata={'query_param': { 'field_name': 'Matcher', 'style': 'form', 'explode': True }})
    target_group_arn: str = field(default=None, metadata={'query_param': { 'field_name': 'TargetGroupArn', 'style': 'form', 'explode': True }})
    unhealthy_threshold_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'UnhealthyThresholdCount', 'style': 'form', 'explode': True }})
    version: GetModifyTargetGroupVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyTargetGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetModifyTargetGroupRequest:
    query_params: GetModifyTargetGroupQueryParams = field(default=None)
    headers: GetModifyTargetGroupHeaders = field(default=None)
    

@dataclass
class GetModifyTargetGroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
