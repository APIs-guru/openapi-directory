from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetCoreDefinitionVersionPathParams:
    core_definition_id: str = field(default=None, metadata={'path_param': { 'field_name': 'CoreDefinitionId', 'style': 'simple', 'explode': False }})
    core_definition_version_id: str = field(default=None, metadata={'path_param': { 'field_name': 'CoreDefinitionVersionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCoreDefinitionVersionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetCoreDefinitionVersionRequest:
    path_params: GetCoreDefinitionVersionPathParams = field(default=None)
    headers: GetCoreDefinitionVersionHeaders = field(default=None)
    

@dataclass
class GetCoreDefinitionVersionResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_core_definition_version_response: Optional[shared.GetCoreDefinitionVersionResponse] = field(default=None)
    status_code: int = field(default=None)
    
