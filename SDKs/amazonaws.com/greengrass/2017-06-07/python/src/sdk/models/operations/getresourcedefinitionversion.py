from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetResourceDefinitionVersionPathParams:
    resource_definition_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ResourceDefinitionId', 'style': 'simple', 'explode': False }})
    resource_definition_version_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ResourceDefinitionVersionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourceDefinitionVersionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetResourceDefinitionVersionRequest:
    path_params: GetResourceDefinitionVersionPathParams = field(default=None)
    headers: GetResourceDefinitionVersionHeaders = field(default=None)
    

@dataclass
class GetResourceDefinitionVersionResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_resource_definition_version_response: Optional[shared.GetResourceDefinitionVersionResponse] = field(default=None)
    status_code: int = field(default=None)
    
