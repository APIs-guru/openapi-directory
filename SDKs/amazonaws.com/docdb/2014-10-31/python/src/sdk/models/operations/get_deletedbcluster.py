from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDeleteDbClusterActionEnum(str, Enum):
    DELETE_DB_CLUSTER = "DeleteDBCluster"

class GetDeleteDbClusterVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetDeleteDbClusterQueryParams:
    action: GetDeleteDbClusterActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_cluster_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'DBClusterIdentifier', 'style': 'form', 'explode': True }})
    final_db_snapshot_identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FinalDBSnapshotIdentifier', 'style': 'form', 'explode': True }})
    skip_final_snapshot: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'SkipFinalSnapshot', 'style': 'form', 'explode': True }})
    version: GetDeleteDbClusterVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteDbClusterHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDeleteDbClusterRequest:
    query_params: GetDeleteDbClusterQueryParams = field(default=None)
    headers: GetDeleteDbClusterHeaders = field(default=None)
    

@dataclass
class GetDeleteDbClusterResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
