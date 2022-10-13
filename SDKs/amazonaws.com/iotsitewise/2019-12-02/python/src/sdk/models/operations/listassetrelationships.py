from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListAssetRelationshipsPathParams:
    asset_id: str = field(default=None, metadata={'path_param': { 'field_name': 'assetId', 'style': 'simple', 'explode': False }})
    
class ListAssetRelationshipsTraversalTypeEnum(str, Enum):
    PATH_TO_ROOT = "PATH_TO_ROOT"


@dataclass
class ListAssetRelationshipsQueryParams:
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    traversal_type: ListAssetRelationshipsTraversalTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'traversalType', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAssetRelationshipsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class ListAssetRelationshipsRequest:
    path_params: ListAssetRelationshipsPathParams = field(default=None)
    query_params: ListAssetRelationshipsQueryParams = field(default=None)
    headers: ListAssetRelationshipsHeaders = field(default=None)
    

@dataclass
class ListAssetRelationshipsResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    list_asset_relationships_response: Optional[shared.ListAssetRelationshipsResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
