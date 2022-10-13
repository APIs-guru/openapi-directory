from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateDeploymentPathParams:
    restapi_id: str = field(default=None, metadata={'path_param': { 'field_name': 'restapi_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDeploymentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class CreateDeploymentRequestBodyCacheClusterSizeEnum(str, Enum):
    ZERO_5 = "0.5"
    ONE_6 = "1.6"
    SIX_1 = "6.1"
    THIRTEEN_5 = "13.5"
    TWENTY_EIGHT_4 = "28.4"
    FIFTY_EIGHT_2 = "58.2"
    ONE_HUNDRED_AND_EIGHTEEN = "118"
    TWO_HUNDRED_AND_THIRTY_SEVEN = "237"


@dataclass_json
@dataclass
class CreateDeploymentRequestBodyCanarySettings:
    percent_traffic: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentTraffic' }})
    stage_variable_overrides: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stageVariableOverrides' }})
    use_stage_cache: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useStageCache' }})
    

@dataclass_json
@dataclass
class CreateDeploymentRequestBody:
    cache_cluster_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheClusterEnabled' }})
    cache_cluster_size: Optional[CreateDeploymentRequestBodyCacheClusterSizeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheClusterSize' }})
    canary_settings: Optional[CreateDeploymentRequestBodyCanarySettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canarySettings' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    stage_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stageDescription' }})
    stage_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stageName' }})
    tracing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tracingEnabled' }})
    variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variables' }})
    

@dataclass
class CreateDeploymentRequest:
    path_params: CreateDeploymentPathParams = field(default=None)
    headers: CreateDeploymentHeaders = field(default=None)
    request: CreateDeploymentRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDeploymentResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    deployment: Optional[shared.Deployment] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
