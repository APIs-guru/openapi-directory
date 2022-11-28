from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetCreateGlobalReplicationGroupActionEnum(str, Enum):
    CREATE_GLOBAL_REPLICATION_GROUP = "CreateGlobalReplicationGroup"

class GetCreateGlobalReplicationGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclass
class GetCreateGlobalReplicationGroupQueryParams:
    action: GetCreateGlobalReplicationGroupActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    global_replication_group_id_suffix: str = field(metadata={'query_param': { 'field_name': 'GlobalReplicationGroupIdSuffix', 'style': 'form', 'explode': True }})
    primary_replication_group_id: str = field(metadata={'query_param': { 'field_name': 'PrimaryReplicationGroupId', 'style': 'form', 'explode': True }})
    version: GetCreateGlobalReplicationGroupVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    global_replication_group_description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'GlobalReplicationGroupDescription', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateGlobalReplicationGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCreateGlobalReplicationGroupRequest:
    headers: GetCreateGlobalReplicationGroupHeaders = field()
    query_params: GetCreateGlobalReplicationGroupQueryParams = field()
    

@dataclass
class GetCreateGlobalReplicationGroupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
