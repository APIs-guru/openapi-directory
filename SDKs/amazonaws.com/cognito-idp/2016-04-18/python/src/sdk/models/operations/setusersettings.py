from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class SetUserSettingsXAmzTargetEnum(str, Enum):
    AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_SET_USER_SETTINGS = "AWSCognitoIdentityProviderService.SetUserSettings"


@dataclass
class SetUserSettingsHeaders:
    x_amz_target: SetUserSettingsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetUserSettingsRequest:
    headers: SetUserSettingsHeaders = field()
    request: shared.SetUserSettingsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetUserSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    internal_error_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    not_authorized_exception: Optional[Any] = field(default=None)
    password_reset_required_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    set_user_settings_response: Optional[dict[str, Any]] = field(default=None)
    user_not_confirmed_exception: Optional[Any] = field(default=None)
    user_not_found_exception: Optional[Any] = field(default=None)
    
