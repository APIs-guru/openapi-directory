from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetLoggerDefinitionVersionPathParams:
    logger_definition_id: str = field(default=None, metadata={'path_param': { 'field_name': 'LoggerDefinitionId', 'style': 'simple', 'explode': False }})
    logger_definition_version_id: str = field(default=None, metadata={'path_param': { 'field_name': 'LoggerDefinitionVersionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLoggerDefinitionVersionQueryParams:
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLoggerDefinitionVersionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLoggerDefinitionVersionRequest:
    path_params: GetLoggerDefinitionVersionPathParams = field(default=None)
    query_params: GetLoggerDefinitionVersionQueryParams = field(default=None)
    headers: GetLoggerDefinitionVersionHeaders = field(default=None)
    

@dataclass
class GetLoggerDefinitionVersionResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_logger_definition_version_response: Optional[shared.GetLoggerDefinitionVersionResponse] = field(default=None)
    status_code: int = field(default=None)
    
