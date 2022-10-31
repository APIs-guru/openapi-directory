from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteFunctionDefinitionPathParams:
    function_definition_id: str = field(default=None, metadata={'path_param': { 'field_name': 'FunctionDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFunctionDefinitionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFunctionDefinitionRequest:
    path_params: DeleteFunctionDefinitionPathParams = field(default=None)
    headers: DeleteFunctionDefinitionHeaders = field(default=None)
    

@dataclass
class DeleteFunctionDefinitionResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    delete_function_definition_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
