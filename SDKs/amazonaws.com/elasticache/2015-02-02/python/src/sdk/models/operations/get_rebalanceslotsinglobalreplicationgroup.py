from dataclasses import dataclass, field
from typing import Enum,Optional

class GetRebalanceSlotsInGlobalReplicationGroupActionEnum(str, Enum):
    REBALANCE_SLOTS_IN_GLOBAL_REPLICATION_GROUP = "RebalanceSlotsInGlobalReplicationGroup"

class GetRebalanceSlotsInGlobalReplicationGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclass
class GetRebalanceSlotsInGlobalReplicationGroupQueryParams:
    action: GetRebalanceSlotsInGlobalReplicationGroupActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    apply_immediately: bool = field(default=None, metadata={'query_param': { 'field_name': 'ApplyImmediately', 'style': 'form', 'explode': True }})
    global_replication_group_id: str = field(default=None, metadata={'query_param': { 'field_name': 'GlobalReplicationGroupId', 'style': 'form', 'explode': True }})
    version: GetRebalanceSlotsInGlobalReplicationGroupVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRebalanceSlotsInGlobalReplicationGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetRebalanceSlotsInGlobalReplicationGroupRequest:
    query_params: GetRebalanceSlotsInGlobalReplicationGroupQueryParams = field(default=None)
    headers: GetRebalanceSlotsInGlobalReplicationGroupHeaders = field(default=None)
    

@dataclass
class GetRebalanceSlotsInGlobalReplicationGroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
