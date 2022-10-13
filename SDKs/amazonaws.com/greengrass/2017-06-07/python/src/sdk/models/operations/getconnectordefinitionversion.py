from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetConnectorDefinitionVersionPathParams:
    connector_definition_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ConnectorDefinitionId', 'style': 'simple', 'explode': False }})
    connector_definition_version_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ConnectorDefinitionVersionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConnectorDefinitionVersionQueryParams:
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConnectorDefinitionVersionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetConnectorDefinitionVersionRequest:
    path_params: GetConnectorDefinitionVersionPathParams = field(default=None)
    query_params: GetConnectorDefinitionVersionQueryParams = field(default=None)
    headers: GetConnectorDefinitionVersionHeaders = field(default=None)
    

@dataclass
class GetConnectorDefinitionVersionResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_connector_definition_version_response: Optional[shared.GetConnectorDefinitionVersionResponse] = field(default=None)
    status_code: int = field(default=None)
    
