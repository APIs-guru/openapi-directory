from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetModifyGlobalReplicationGroupActionEnum(str, Enum):
    MODIFY_GLOBAL_REPLICATION_GROUP = "ModifyGlobalReplicationGroup"

class GetModifyGlobalReplicationGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclass
class GetModifyGlobalReplicationGroupQueryParams:
    action: GetModifyGlobalReplicationGroupActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    apply_immediately: bool = field(metadata={'query_param': { 'field_name': 'ApplyImmediately', 'style': 'form', 'explode': True }})
    global_replication_group_id: str = field(metadata={'query_param': { 'field_name': 'GlobalReplicationGroupId', 'style': 'form', 'explode': True }})
    version: GetModifyGlobalReplicationGroupVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    automatic_failover_enabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'AutomaticFailoverEnabled', 'style': 'form', 'explode': True }})
    cache_node_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CacheNodeType', 'style': 'form', 'explode': True }})
    cache_parameter_group_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CacheParameterGroupName', 'style': 'form', 'explode': True }})
    engine_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EngineVersion', 'style': 'form', 'explode': True }})
    global_replication_group_description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'GlobalReplicationGroupDescription', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyGlobalReplicationGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyGlobalReplicationGroupRequest:
    headers: GetModifyGlobalReplicationGroupHeaders = field()
    query_params: GetModifyGlobalReplicationGroupQueryParams = field()
    

@dataclass
class GetModifyGlobalReplicationGroupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
