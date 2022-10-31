from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class SetIdentityPoolConfigurationPathParams:
    identity_pool_id: str = field(default=None, metadata={'path_param': { 'field_name': 'IdentityPoolId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetIdentityPoolConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SetIdentityPoolConfigurationRequestBodyCognitoStreams:
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamName' }})
    streaming_status: Optional[shared.StreamingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamingStatus' }})
    

@dataclass_json
@dataclass
class SetIdentityPoolConfigurationRequestBodyPushSync:
    application_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationArns' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    

@dataclass_json
@dataclass
class SetIdentityPoolConfigurationRequestBody:
    cognito_streams: Optional[SetIdentityPoolConfigurationRequestBodyCognitoStreams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CognitoStreams' }})
    push_sync: Optional[SetIdentityPoolConfigurationRequestBodyPushSync] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PushSync' }})
    

@dataclass
class SetIdentityPoolConfigurationRequest:
    path_params: SetIdentityPoolConfigurationPathParams = field(default=None)
    headers: SetIdentityPoolConfigurationHeaders = field(default=None)
    request: SetIdentityPoolConfigurationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetIdentityPoolConfigurationResponse:
    concurrent_modification_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_error_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    not_authorized_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    set_identity_pool_configuration_response: Optional[shared.SetIdentityPoolConfigurationResponse] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
