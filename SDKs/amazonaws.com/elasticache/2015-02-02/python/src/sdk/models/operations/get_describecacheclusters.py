from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDescribeCacheClustersActionEnum(str, Enum):
    DESCRIBE_CACHE_CLUSTERS = "DescribeCacheClusters"

class GetDescribeCacheClustersVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclass
class GetDescribeCacheClustersQueryParams:
    action: GetDescribeCacheClustersActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetDescribeCacheClustersVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    cache_cluster_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CacheClusterId', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    show_cache_clusters_not_in_replication_groups: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ShowCacheClustersNotInReplicationGroups', 'style': 'form', 'explode': True }})
    show_cache_node_info: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ShowCacheNodeInfo', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeCacheClustersHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDescribeCacheClustersRequest:
    headers: GetDescribeCacheClustersHeaders = field()
    query_params: GetDescribeCacheClustersQueryParams = field()
    

@dataclass
class GetDescribeCacheClustersResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
