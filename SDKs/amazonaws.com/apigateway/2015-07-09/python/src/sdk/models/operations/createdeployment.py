from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateDeploymentPathParams:
    restapi_id: str = field(metadata={'path_param': { 'field_name': 'restapi_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDeploymentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
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
    r"""CreateDeploymentRequestBodyCanarySettings
    The input configuration for a canary deployment.
    """
    
    percent_traffic: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentTraffic') }})
    stage_variable_overrides: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageVariableOverrides') }})
    use_stage_cache: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useStageCache') }})
    

@dataclass_json
@dataclass
class CreateDeploymentRequestBody:
    cache_cluster_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheClusterEnabled') }})
    cache_cluster_size: Optional[CreateDeploymentRequestBodyCacheClusterSizeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheClusterSize') }})
    canary_settings: Optional[CreateDeploymentRequestBodyCanarySettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canarySettings') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    stage_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageDescription') }})
    stage_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageName') }})
    tracing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracingEnabled') }})
    variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variables') }})
    

@dataclass
class CreateDeploymentRequest:
    headers: CreateDeploymentHeaders = field()
    path_params: CreateDeploymentPathParams = field()
    request: CreateDeploymentRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDeploymentResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    deployment: Optional[shared.Deployment] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
