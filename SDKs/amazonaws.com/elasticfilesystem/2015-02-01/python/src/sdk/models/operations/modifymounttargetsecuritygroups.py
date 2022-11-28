from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ModifyMountTargetSecurityGroupsPathParams:
    mount_target_id: str = field(metadata={'path_param': { 'field_name': 'MountTargetId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ModifyMountTargetSecurityGroupsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ModifyMountTargetSecurityGroupsRequestBody:
    security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroups') }})
    

@dataclass
class ModifyMountTargetSecurityGroupsRequest:
    headers: ModifyMountTargetSecurityGroupsHeaders = field()
    path_params: ModifyMountTargetSecurityGroupsPathParams = field()
    request: ModifyMountTargetSecurityGroupsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ModifyMountTargetSecurityGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request: Optional[Any] = field(default=None)
    incorrect_mount_target_state: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    mount_target_not_found: Optional[Any] = field(default=None)
    security_group_limit_exceeded: Optional[Any] = field(default=None)
    security_group_not_found: Optional[Any] = field(default=None)
    
