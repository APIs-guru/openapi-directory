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
class SetV2LoggingLevelHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class SetV2LoggingLevelRequestBodyLogLevelEnum(str, Enum):
    DEBUG = "DEBUG"
    INFO = "INFO"
    ERROR = "ERROR"
    WARN = "WARN"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class SetV2LoggingLevelRequestBodyLogTarget:
    r"""SetV2LoggingLevelRequestBodyLogTarget
    A log target.
    """
    
    target_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetName') }})
    target_type: Optional[shared.LogTargetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetType') }})
    

@dataclass_json
@dataclass
class SetV2LoggingLevelRequestBody:
    log_level: SetV2LoggingLevelRequestBodyLogLevelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logLevel') }})
    log_target: SetV2LoggingLevelRequestBodyLogTarget = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logTarget') }})
    

@dataclass
class SetV2LoggingLevelRequest:
    headers: SetV2LoggingLevelHeaders = field()
    request: SetV2LoggingLevelRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetV2LoggingLevelResponse:
    content_type: str = field()
    status_code: int = field()
    internal_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_configured_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    
