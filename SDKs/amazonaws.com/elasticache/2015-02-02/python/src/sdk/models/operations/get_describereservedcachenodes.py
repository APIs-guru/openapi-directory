from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDescribeReservedCacheNodesActionEnum(str, Enum):
    DESCRIBE_RESERVED_CACHE_NODES = "DescribeReservedCacheNodes"

class GetDescribeReservedCacheNodesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclass
class GetDescribeReservedCacheNodesQueryParams:
    action: GetDescribeReservedCacheNodesActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cache_node_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CacheNodeType', 'style': 'form', 'explode': True }})
    duration: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Duration', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    offering_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'OfferingType', 'style': 'form', 'explode': True }})
    product_description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ProductDescription', 'style': 'form', 'explode': True }})
    reserved_cache_node_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ReservedCacheNodeId', 'style': 'form', 'explode': True }})
    reserved_cache_nodes_offering_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ReservedCacheNodesOfferingId', 'style': 'form', 'explode': True }})
    version: GetDescribeReservedCacheNodesVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeReservedCacheNodesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDescribeReservedCacheNodesRequest:
    query_params: GetDescribeReservedCacheNodesQueryParams = field(default=None)
    headers: GetDescribeReservedCacheNodesHeaders = field(default=None)
    

@dataclass
class GetDescribeReservedCacheNodesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
