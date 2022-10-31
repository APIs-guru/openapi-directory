from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetResourceCollectionResourceCollectionTypeEnum(str, Enum):
    AWS_CLOUD_FORMATION = "AWS_CLOUD_FORMATION"
    AWS_SERVICE = "AWS_SERVICE"


@dataclass
class GetResourceCollectionPathParams:
    resource_collection_type: GetResourceCollectionResourceCollectionTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'ResourceCollectionType', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourceCollectionQueryParams:
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class GetResourceCollectionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourceCollectionRequest:
    path_params: GetResourceCollectionPathParams = field(default=None)
    query_params: GetResourceCollectionQueryParams = field(default=None)
    headers: GetResourceCollectionHeaders = field(default=None)
    

@dataclass
class GetResourceCollectionResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_resource_collection_response: Optional[shared.GetResourceCollectionResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
