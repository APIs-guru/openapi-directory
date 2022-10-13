from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetModifyUserGroupActionEnum(str, Enum):
    MODIFY_USER_GROUP = "ModifyUserGroup"

class GetModifyUserGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclass
class GetModifyUserGroupQueryParams:
    action: GetModifyUserGroupActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    user_group_id: str = field(default=None, metadata={'query_param': { 'field_name': 'UserGroupId', 'style': 'form', 'explode': True }})
    user_ids_to_add: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'UserIdsToAdd', 'style': 'form', 'explode': True }})
    user_ids_to_remove: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'UserIdsToRemove', 'style': 'form', 'explode': True }})
    version: GetModifyUserGroupVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyUserGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetModifyUserGroupRequest:
    query_params: GetModifyUserGroupQueryParams = field(default=None)
    headers: GetModifyUserGroupHeaders = field(default=None)
    

@dataclass
class GetModifyUserGroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
