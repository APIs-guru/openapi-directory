from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateBackendConfigPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateBackendConfigHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateBackendConfigRequestBodyLoginAuthConfig:
    aws_cognito_identity_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsCognitoIdentityPoolId' }})
    aws_cognito_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsCognitoRegion' }})
    aws_user_pools_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsUserPoolsId' }})
    aws_user_pools_web_client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsUserPoolsWebClientId' }})
    

@dataclass_json
@dataclass
class UpdateBackendConfigRequestBody:
    login_auth_config: Optional[UpdateBackendConfigRequestBodyLoginAuthConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loginAuthConfig' }})
    

@dataclass
class UpdateBackendConfigRequest:
    path_params: UpdateBackendConfigPathParams = field(default=None)
    headers: UpdateBackendConfigHeaders = field(default=None)
    request: UpdateBackendConfigRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateBackendConfigResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    gateway_timeout_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_backend_config_response: Optional[shared.UpdateBackendConfigResponse] = field(default=None)
    
