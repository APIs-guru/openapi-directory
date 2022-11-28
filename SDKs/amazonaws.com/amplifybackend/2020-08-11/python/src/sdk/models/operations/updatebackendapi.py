from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateBackendAPIPathParams:
    app_id: str = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    backend_environment_name: str = field(metadata={'path_param': { 'field_name': 'backendEnvironmentName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateBackendAPIHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateBackendAPIRequestBodyResourceConfig:
    r"""UpdateBackendAPIRequestBodyResourceConfig
    The resource config for the data model, configured as a part of the Amplify project.
    """
    
    additional_auth_types: Optional[List[shared.BackendAPIAuthType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalAuthTypes') }})
    api_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiName') }})
    conflict_resolution: Optional[shared.BackendAPIConflictResolution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConflictResolution') }})
    default_auth_type: Optional[shared.BackendAPIAuthType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultAuthType') }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Service') }})
    transform_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformSchema') }})
    

@dataclass_json
@dataclass
class UpdateBackendAPIRequestBody:
    resource_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    resource_config: Optional[UpdateBackendAPIRequestBodyResourceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceConfig') }})
    

@dataclass
class UpdateBackendAPIRequest:
    headers: UpdateBackendAPIHeaders = field()
    path_params: UpdateBackendAPIPathParams = field()
    request: UpdateBackendAPIRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateBackendAPIResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    gateway_timeout_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_backend_api_response: Optional[shared.UpdateBackendAPIResponse] = field(default=None)
    
