from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDeleteGlobalReplicationGroupActionEnum(str, Enum):
    DELETE_GLOBAL_REPLICATION_GROUP = "DeleteGlobalReplicationGroup"

class GetDeleteGlobalReplicationGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclass
class GetDeleteGlobalReplicationGroupQueryParams:
    action: GetDeleteGlobalReplicationGroupActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    global_replication_group_id: str = field(default=None, metadata={'query_param': { 'field_name': 'GlobalReplicationGroupId', 'style': 'form', 'explode': True }})
    retain_primary_replication_group: bool = field(default=None, metadata={'query_param': { 'field_name': 'RetainPrimaryReplicationGroup', 'style': 'form', 'explode': True }})
    version: GetDeleteGlobalReplicationGroupVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteGlobalReplicationGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeleteGlobalReplicationGroupRequest:
    query_params: GetDeleteGlobalReplicationGroupQueryParams = field(default=None)
    headers: GetDeleteGlobalReplicationGroupHeaders = field(default=None)
    

@dataclass
class GetDeleteGlobalReplicationGroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
