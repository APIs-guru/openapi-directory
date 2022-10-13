from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class ModifyMountTargetSecurityGroupsPathParams:
    mount_target_id: str = field(default=None, metadata={'path_param': { 'field_name': 'MountTargetId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ModifyMountTargetSecurityGroupsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class ModifyMountTargetSecurityGroupsRequestBody:
    security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroups' }})
    

@dataclass
class ModifyMountTargetSecurityGroupsRequest:
    path_params: ModifyMountTargetSecurityGroupsPathParams = field(default=None)
    headers: ModifyMountTargetSecurityGroupsHeaders = field(default=None)
    request: ModifyMountTargetSecurityGroupsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ModifyMountTargetSecurityGroupsResponse:
    bad_request: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    incorrect_mount_target_state: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    mount_target_not_found: Optional[Any] = field(default=None)
    security_group_limit_exceeded: Optional[Any] = field(default=None)
    security_group_not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
