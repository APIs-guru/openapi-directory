from dataclasses import dataclass, field
from typing import Enum,Optional

class GetFailoverGlobalReplicationGroupActionEnum(str, Enum):
    FAILOVER_GLOBAL_REPLICATION_GROUP = "FailoverGlobalReplicationGroup"

class GetFailoverGlobalReplicationGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclass
class GetFailoverGlobalReplicationGroupQueryParams:
    action: GetFailoverGlobalReplicationGroupActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    global_replication_group_id: str = field(default=None, metadata={'query_param': { 'field_name': 'GlobalReplicationGroupId', 'style': 'form', 'explode': True }})
    primary_region: str = field(default=None, metadata={'query_param': { 'field_name': 'PrimaryRegion', 'style': 'form', 'explode': True }})
    primary_replication_group_id: str = field(default=None, metadata={'query_param': { 'field_name': 'PrimaryReplicationGroupId', 'style': 'form', 'explode': True }})
    version: GetFailoverGlobalReplicationGroupVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFailoverGlobalReplicationGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFailoverGlobalReplicationGroupRequest:
    query_params: GetFailoverGlobalReplicationGroupQueryParams = field(default=None)
    headers: GetFailoverGlobalReplicationGroupHeaders = field(default=None)
    

@dataclass
class GetFailoverGlobalReplicationGroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
