from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateLoggerDefinitionPathParams:
    logger_definition_id: str = field(default=None, metadata={'path_param': { 'field_name': 'LoggerDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLoggerDefinitionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateLoggerDefinitionRequestBody:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass
class UpdateLoggerDefinitionRequest:
    path_params: UpdateLoggerDefinitionPathParams = field(default=None)
    headers: UpdateLoggerDefinitionHeaders = field(default=None)
    request: UpdateLoggerDefinitionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateLoggerDefinitionResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_logger_definition_response: Optional[dict[str, Any]] = field(default=None)
    
