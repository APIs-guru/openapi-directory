from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class UpdateApprovalRuleTemplateDescriptionXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_UPDATE_APPROVAL_RULE_TEMPLATE_DESCRIPTION = "CodeCommit_20150413.UpdateApprovalRuleTemplateDescription"


@dataclass
class UpdateApprovalRuleTemplateDescriptionHeaders:
    x_amz_target: UpdateApprovalRuleTemplateDescriptionXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateApprovalRuleTemplateDescriptionRequest:
    headers: UpdateApprovalRuleTemplateDescriptionHeaders = field()
    request: shared.UpdateApprovalRuleTemplateDescriptionInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateApprovalRuleTemplateDescriptionResponse:
    content_type: str = field()
    status_code: int = field()
    approval_rule_template_does_not_exist_exception: Optional[Any] = field(default=None)
    approval_rule_template_name_required_exception: Optional[Any] = field(default=None)
    invalid_approval_rule_template_description_exception: Optional[Any] = field(default=None)
    invalid_approval_rule_template_name_exception: Optional[Any] = field(default=None)
    update_approval_rule_template_description_output: Optional[shared.UpdateApprovalRuleTemplateDescriptionOutput] = field(default=None)
    
