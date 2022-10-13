from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDescribeCacheClustersActionEnum(str, Enum):
    DESCRIBE_CACHE_CLUSTERS = "DescribeCacheClusters"

class GetDescribeCacheClustersVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclass
class GetDescribeCacheClustersQueryParams:
    action: GetDescribeCacheClustersActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cache_cluster_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CacheClusterId', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    show_cache_clusters_not_in_replication_groups: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ShowCacheClustersNotInReplicationGroups', 'style': 'form', 'explode': True }})
    show_cache_node_info: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ShowCacheNodeInfo', 'style': 'form', 'explode': True }})
    version: GetDescribeCacheClustersVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeCacheClustersHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDescribeCacheClustersRequest:
    query_params: GetDescribeCacheClustersQueryParams = field(default=None)
    headers: GetDescribeCacheClustersHeaders = field(default=None)
    

@dataclass
class GetDescribeCacheClustersResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
