from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class ListCoreDefinitionVersionsPathParams:
    core_definition_id: str = field(default=None, metadata={'path_param': { 'field_name': 'CoreDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListCoreDefinitionVersionsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class ListCoreDefinitionVersionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListCoreDefinitionVersionsRequest:
    path_params: ListCoreDefinitionVersionsPathParams = field(default=None)
    query_params: ListCoreDefinitionVersionsQueryParams = field(default=None)
    headers: ListCoreDefinitionVersionsHeaders = field(default=None)
    

@dataclass
class ListCoreDefinitionVersionsResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    list_core_definition_versions_response: Optional[shared.ListCoreDefinitionVersionsResponse] = field(default=None)
    status_code: int = field(default=None)
    
