from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetDecreaseNodeGroupsInGlobalReplicationGroupActionEnum(str, Enum):
    DECREASE_NODE_GROUPS_IN_GLOBAL_REPLICATION_GROUP = "DecreaseNodeGroupsInGlobalReplicationGroup"

class GetDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclass
class GetDecreaseNodeGroupsInGlobalReplicationGroupQueryParams:
    action: GetDecreaseNodeGroupsInGlobalReplicationGroupActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    apply_immediately: bool = field(metadata={'query_param': { 'field_name': 'ApplyImmediately', 'style': 'form', 'explode': True }})
    global_replication_group_id: str = field(metadata={'query_param': { 'field_name': 'GlobalReplicationGroupId', 'style': 'form', 'explode': True }})
    node_group_count: int = field(metadata={'query_param': { 'field_name': 'NodeGroupCount', 'style': 'form', 'explode': True }})
    version: GetDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    global_node_groups_to_remove: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'GlobalNodeGroupsToRemove', 'style': 'form', 'explode': True }})
    global_node_groups_to_retain: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'GlobalNodeGroupsToRetain', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDecreaseNodeGroupsInGlobalReplicationGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDecreaseNodeGroupsInGlobalReplicationGroupRequest:
    headers: GetDecreaseNodeGroupsInGlobalReplicationGroupHeaders = field()
    query_params: GetDecreaseNodeGroupsInGlobalReplicationGroupQueryParams = field()
    

@dataclass
class GetDecreaseNodeGroupsInGlobalReplicationGroupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
