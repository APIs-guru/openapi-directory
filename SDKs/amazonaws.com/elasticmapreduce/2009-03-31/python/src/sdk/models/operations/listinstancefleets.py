from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListInstanceFleetsQueryParams:
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    
class ListInstanceFleetsXAmzTargetEnum(str, Enum):
    ELASTIC_MAP_REDUCE_LIST_INSTANCE_FLEETS = "ElasticMapReduce.ListInstanceFleets"


@dataclass
class ListInstanceFleetsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ListInstanceFleetsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ListInstanceFleetsRequest:
    query_params: ListInstanceFleetsQueryParams = field(default=None)
    headers: ListInstanceFleetsHeaders = field(default=None)
    request: shared.ListInstanceFleetsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListInstanceFleetsResponse:
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    list_instance_fleets_output: Optional[shared.ListInstanceFleetsOutput] = field(default=None)
    status_code: int = field(default=None)
    
