from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class AssociateTeamMemberXAmzTargetEnum(str, Enum):
    CODE_STAR_20170419_ASSOCIATE_TEAM_MEMBER = "CodeStar_20170419.AssociateTeamMember"


@dataclass
class AssociateTeamMemberHeaders:
    x_amz_target: AssociateTeamMemberXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class AssociateTeamMemberRequest:
    headers: AssociateTeamMemberHeaders = field()
    request: shared.AssociateTeamMemberRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssociateTeamMemberResponse:
    content_type: str = field()
    status_code: int = field()
    associate_team_member_result: Optional[shared.AssociateTeamMemberResult] = field(default=None)
    concurrent_modification_exception: Optional[Any] = field(default=None)
    invalid_service_role_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    project_configuration_exception: Optional[Any] = field(default=None)
    project_not_found_exception: Optional[Any] = field(default=None)
    team_member_already_associated_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
