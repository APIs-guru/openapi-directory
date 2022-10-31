from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListAssociatedAssetsPathParams:
    asset_id: str = field(default=None, metadata={'path_param': { 'field_name': 'assetId', 'style': 'simple', 'explode': False }})
    
class ListAssociatedAssetsTraversalDirectionEnum(str, Enum):
    PARENT = "PARENT"
    CHILD = "CHILD"


@dataclass
class ListAssociatedAssetsQueryParams:
    hierarchy_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'hierarchyId', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    traversal_direction: Optional[ListAssociatedAssetsTraversalDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'traversalDirection', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAssociatedAssetsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListAssociatedAssetsRequest:
    path_params: ListAssociatedAssetsPathParams = field(default=None)
    query_params: ListAssociatedAssetsQueryParams = field(default=None)
    headers: ListAssociatedAssetsHeaders = field(default=None)
    

@dataclass
class ListAssociatedAssetsResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    list_associated_assets_response: Optional[shared.ListAssociatedAssetsResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
