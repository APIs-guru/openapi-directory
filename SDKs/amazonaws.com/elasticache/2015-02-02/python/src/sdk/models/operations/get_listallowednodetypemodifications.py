from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetListAllowedNodeTypeModificationsActionEnum(str, Enum):
    LIST_ALLOWED_NODE_TYPE_MODIFICATIONS = "ListAllowedNodeTypeModifications"

class GetListAllowedNodeTypeModificationsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclass
class GetListAllowedNodeTypeModificationsQueryParams:
    action: GetListAllowedNodeTypeModificationsActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cache_cluster_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CacheClusterId', 'style': 'form', 'explode': True }})
    replication_group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ReplicationGroupId', 'style': 'form', 'explode': True }})
    version: GetListAllowedNodeTypeModificationsVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListAllowedNodeTypeModificationsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListAllowedNodeTypeModificationsRequest:
    query_params: GetListAllowedNodeTypeModificationsQueryParams = field(default=None)
    headers: GetListAllowedNodeTypeModificationsHeaders = field(default=None)
    

@dataclass
class GetListAllowedNodeTypeModificationsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
