from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class GetAuthorizationTokenXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_REGISTRY_V20150921_GET_AUTHORIZATION_TOKEN = "AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken"


@dataclass
class GetAuthorizationTokenHeaders:
    x_amz_target: GetAuthorizationTokenXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAuthorizationTokenRequest:
    headers: GetAuthorizationTokenHeaders = field()
    request: shared.GetAuthorizationTokenRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetAuthorizationTokenResponse:
    content_type: str = field()
    status_code: int = field()
    get_authorization_token_response: Optional[shared.GetAuthorizationTokenResponse] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    
