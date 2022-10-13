from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListRepositoryAssociationsQueryParams:
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'Name', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    owner: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'Owner', 'style': 'form', 'explode': True }})
    provider_type: Optional[List[shared.ProviderTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ProviderType', 'style': 'form', 'explode': True }})
    state: Optional[List[shared.RepositoryAssociationStateEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'State', 'style': 'form', 'explode': True }})
    

@dataclass
class ListRepositoryAssociationsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class ListRepositoryAssociationsRequest:
    query_params: ListRepositoryAssociationsQueryParams = field(default=None)
    headers: ListRepositoryAssociationsHeaders = field(default=None)
    

@dataclass
class ListRepositoryAssociationsResponse:
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    list_repository_associations_response: Optional[shared.ListRepositoryAssociationsResponse] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
