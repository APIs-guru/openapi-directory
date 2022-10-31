from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class SetLoggingOptionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SetLoggingOptionsRequestBodyLoggingOptionsPayload:
    log_level: Optional[shared.LogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logLevel' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    

@dataclass_json
@dataclass
class SetLoggingOptionsRequestBody:
    logging_options_payload: SetLoggingOptionsRequestBodyLoggingOptionsPayload = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loggingOptionsPayload' }})
    

@dataclass
class SetLoggingOptionsRequest:
    headers: SetLoggingOptionsHeaders = field(default=None)
    request: SetLoggingOptionsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetLoggingOptionsResponse:
    content_type: str = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
