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
class UpdateBackendAuthPathParams:
    app_id: str = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    backend_environment_name: str = field(metadata={'path_param': { 'field_name': 'backendEnvironmentName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateBackendAuthHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateBackendAuthRequestBodyResourceConfig:
    r"""UpdateBackendAuthRequestBodyResourceConfig
    Defines the resource configuration when updating an authentication resource in your Amplify project.
    """
    
    auth_resources: Optional[shared.AuthResourcesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthResources') }})
    identity_pool_configs: Optional[shared.UpdateBackendAuthIdentityPoolConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolConfigs') }})
    service: Optional[shared.ServiceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Service') }})
    user_pool_configs: Optional[shared.UpdateBackendAuthUserPoolConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolConfigs') }})
    

@dataclass_json
@dataclass
class UpdateBackendAuthRequestBody:
    resource_config: UpdateBackendAuthRequestBodyResourceConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceConfig') }})
    resource_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    

@dataclass
class UpdateBackendAuthRequest:
    headers: UpdateBackendAuthHeaders = field()
    path_params: UpdateBackendAuthPathParams = field()
    request: UpdateBackendAuthRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateBackendAuthResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    gateway_timeout_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_backend_auth_response: Optional[shared.UpdateBackendAuthResponse] = field(default=None)
    
