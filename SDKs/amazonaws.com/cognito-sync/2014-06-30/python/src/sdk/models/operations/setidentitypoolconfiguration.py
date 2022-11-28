from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class SetIdentityPoolConfigurationPathParams:
    identity_pool_id: str = field(metadata={'path_param': { 'field_name': 'IdentityPoolId', 'style': 'simple', 'explode': False }})
    

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
    r"""SetIdentityPoolConfigurationRequestBodyCognitoStreams
    Configuration options for configure Cognito streams.
    """
    
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    streaming_status: Optional[shared.StreamingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamingStatus') }})
    

@dataclass_json
@dataclass
class SetIdentityPoolConfigurationRequestBodyPushSync:
    r"""SetIdentityPoolConfigurationRequestBodyPushSync
    Configuration options to be applied to the identity pool.
    """
    
    application_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationArns') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    

@dataclass_json
@dataclass
class SetIdentityPoolConfigurationRequestBody:
    cognito_streams: Optional[SetIdentityPoolConfigurationRequestBodyCognitoStreams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CognitoStreams') }})
    push_sync: Optional[SetIdentityPoolConfigurationRequestBodyPushSync] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PushSync') }})
    

@dataclass
class SetIdentityPoolConfigurationRequest:
    headers: SetIdentityPoolConfigurationHeaders = field()
    path_params: SetIdentityPoolConfigurationPathParams = field()
    request: SetIdentityPoolConfigurationRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetIdentityPoolConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    concurrent_modification_exception: Optional[Any] = field(default=None)
    internal_error_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    not_authorized_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    set_identity_pool_configuration_response: Optional[shared.SetIdentityPoolConfigurationResponse] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
