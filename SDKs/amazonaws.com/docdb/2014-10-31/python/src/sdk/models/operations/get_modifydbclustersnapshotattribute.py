from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetModifyDbClusterSnapshotAttributeActionEnum(str, Enum):
    MODIFY_DB_CLUSTER_SNAPSHOT_ATTRIBUTE = "ModifyDBClusterSnapshotAttribute"

class GetModifyDbClusterSnapshotAttributeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetModifyDbClusterSnapshotAttributeQueryParams:
    action: GetModifyDbClusterSnapshotAttributeActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    attribute_name: str = field(default=None, metadata={'query_param': { 'field_name': 'AttributeName', 'style': 'form', 'explode': True }})
    db_cluster_snapshot_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'DBClusterSnapshotIdentifier', 'style': 'form', 'explode': True }})
    values_to_add: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ValuesToAdd', 'style': 'form', 'explode': True }})
    values_to_remove: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ValuesToRemove', 'style': 'form', 'explode': True }})
    version: GetModifyDbClusterSnapshotAttributeVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyDbClusterSnapshotAttributeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyDbClusterSnapshotAttributeRequest:
    query_params: GetModifyDbClusterSnapshotAttributeQueryParams = field(default=None)
    headers: GetModifyDbClusterSnapshotAttributeHeaders = field(default=None)
    

@dataclass
class GetModifyDbClusterSnapshotAttributeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
