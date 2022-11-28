from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DescribeClientAuthenticationSettingsXAmzTargetEnum(str, Enum):
    DIRECTORY_SERVICE_20150416_DESCRIBE_CLIENT_AUTHENTICATION_SETTINGS = "DirectoryService_20150416.DescribeClientAuthenticationSettings"


@dataclass
class DescribeClientAuthenticationSettingsHeaders:
    x_amz_target: DescribeClientAuthenticationSettingsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeClientAuthenticationSettingsRequest:
    headers: DescribeClientAuthenticationSettingsHeaders = field()
    request: shared.DescribeClientAuthenticationSettingsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeClientAuthenticationSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    client_exception: Optional[Any] = field(default=None)
    describe_client_authentication_settings_result: Optional[shared.DescribeClientAuthenticationSettingsResult] = field(default=None)
    directory_does_not_exist_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    unsupported_operation_exception: Optional[Any] = field(default=None)
    
