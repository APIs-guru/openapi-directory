from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDescribeDbClusterSnapshotAttributesActionEnum(str, Enum):
    DESCRIBE_DB_CLUSTER_SNAPSHOT_ATTRIBUTES = "DescribeDBClusterSnapshotAttributes"

class GetDescribeDbClusterSnapshotAttributesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetDescribeDbClusterSnapshotAttributesQueryParams:
    action: GetDescribeDbClusterSnapshotAttributesActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_cluster_snapshot_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'DBClusterSnapshotIdentifier', 'style': 'form', 'explode': True }})
    version: GetDescribeDbClusterSnapshotAttributesVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeDbClusterSnapshotAttributesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDescribeDbClusterSnapshotAttributesRequest:
    query_params: GetDescribeDbClusterSnapshotAttributesQueryParams = field(default=None)
    headers: GetDescribeDbClusterSnapshotAttributesHeaders = field(default=None)
    

@dataclass
class GetDescribeDbClusterSnapshotAttributesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
