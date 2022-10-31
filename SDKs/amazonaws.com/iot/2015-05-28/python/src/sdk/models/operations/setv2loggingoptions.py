from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class SetV2LoggingOptionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum(str, Enum):
    DEBUG = "DEBUG"
    INFO = "INFO"
    ERROR = "ERROR"
    WARN = "WARN"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class SetV2LoggingOptionsRequestBody:
    default_log_level: Optional[SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultLogLevel' }})
    disable_all_logs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableAllLogs' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    

@dataclass
class SetV2LoggingOptionsRequest:
    headers: SetV2LoggingOptionsHeaders = field(default=None)
    request: SetV2LoggingOptionsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetV2LoggingOptionsResponse:
    content_type: str = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
