from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateStagePathParams:
    api_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateStageHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateStageRequestBodyAccessLogSettings:
    destination_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationArn' }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Format' }})
    

@dataclass_json
@dataclass
class CreateStageRequestBodyDefaultRouteSettings:
    data_trace_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataTraceEnabled' }})
    detailed_metrics_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DetailedMetricsEnabled' }})
    logging_level: Optional[shared.LoggingLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoggingLevel' }})
    throttling_burst_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThrottlingBurstLimit' }})
    throttling_rate_limit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThrottlingRateLimit' }})
    

@dataclass_json
@dataclass
class CreateStageRequestBody:
    access_log_settings: Optional[CreateStageRequestBodyAccessLogSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessLogSettings' }})
    auto_deploy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoDeploy' }})
    client_certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientCertificateId' }})
    default_route_settings: Optional[CreateStageRequestBodyDefaultRouteSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultRouteSettings' }})
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    route_settings: Optional[dict[str, shared.RouteSettings]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeSettings' }})
    stage_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stageName' }})
    stage_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stageVariables' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateStageRequest:
    path_params: CreateStagePathParams = field(default=None)
    headers: CreateStageHeaders = field(default=None)
    request: CreateStageRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateStageResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_stage_response: Optional[shared.CreateStageResponse] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
