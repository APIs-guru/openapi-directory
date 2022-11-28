from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AssociateRoleToGroupPathParams:
    group_id: str = field(metadata={'path_param': { 'field_name': 'GroupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AssociateRoleToGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AssociateRoleToGroupRequestBody:
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    

@dataclass
class AssociateRoleToGroupRequest:
    headers: AssociateRoleToGroupHeaders = field()
    path_params: AssociateRoleToGroupPathParams = field()
    request: AssociateRoleToGroupRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssociateRoleToGroupResponse:
    content_type: str = field()
    status_code: int = field()
    associate_role_to_group_response: Optional[shared.AssociateRoleToGroupResponse] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    
