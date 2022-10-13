from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetRebootCacheClusterActionEnum(str, Enum):
    REBOOT_CACHE_CLUSTER = "RebootCacheCluster"

class GetRebootCacheClusterVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclass
class GetRebootCacheClusterQueryParams:
    action: GetRebootCacheClusterActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cache_cluster_id: str = field(default=None, metadata={'query_param': { 'field_name': 'CacheClusterId', 'style': 'form', 'explode': True }})
    cache_node_ids_to_reboot: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'CacheNodeIdsToReboot', 'style': 'form', 'explode': True }})
    version: GetRebootCacheClusterVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRebootCacheClusterHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetRebootCacheClusterRequest:
    query_params: GetRebootCacheClusterQueryParams = field(default=None)
    headers: GetRebootCacheClusterHeaders = field(default=None)
    

@dataclass
class GetRebootCacheClusterResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
