from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetModifyUserGroupActionEnum(str, Enum):
    MODIFY_USER_GROUP = "ModifyUserGroup"

class GetModifyUserGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclass
class GetModifyUserGroupQueryParams:
    action: GetModifyUserGroupActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    user_group_id: str = field(metadata={'query_param': { 'field_name': 'UserGroupId', 'style': 'form', 'explode': True }})
    version: GetModifyUserGroupVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    user_ids_to_add: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'UserIdsToAdd', 'style': 'form', 'explode': True }})
    user_ids_to_remove: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'UserIdsToRemove', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyUserGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyUserGroupRequest:
    headers: GetModifyUserGroupHeaders = field()
    query_params: GetModifyUserGroupQueryParams = field()
    

@dataclass
class GetModifyUserGroupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
