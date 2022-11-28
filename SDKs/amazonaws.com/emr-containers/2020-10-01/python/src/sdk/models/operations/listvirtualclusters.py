from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared

class ListVirtualClustersContainerProviderTypeEnum(str, Enum):
    EKS = "EKS"


@dataclass
class ListVirtualClustersQueryParams:
    container_provider_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'containerProviderId', 'style': 'form', 'explode': True }})
    container_provider_type: Optional[ListVirtualClustersContainerProviderTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'containerProviderType', 'style': 'form', 'explode': True }})
    created_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'createdAfter', 'style': 'form', 'explode': True }})
    created_before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'createdBefore', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    states: Optional[List[shared.VirtualClusterStateEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'states', 'style': 'form', 'explode': True }})
    

@dataclass
class ListVirtualClustersHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListVirtualClustersRequest:
    headers: ListVirtualClustersHeaders = field()
    query_params: ListVirtualClustersQueryParams = field()
    

@dataclass
class ListVirtualClustersResponse:
    content_type: str = field()
    status_code: int = field()
    internal_server_exception: Optional[Any] = field(default=None)
    list_virtual_clusters_response: Optional[shared.ListVirtualClustersResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
