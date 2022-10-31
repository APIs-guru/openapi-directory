from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UpdateApprovalRuleTemplateNameXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_UPDATE_APPROVAL_RULE_TEMPLATE_NAME = "CodeCommit_20150413.UpdateApprovalRuleTemplateName"


@dataclass
class UpdateApprovalRuleTemplateNameHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: UpdateApprovalRuleTemplateNameXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateApprovalRuleTemplateNameRequest:
    headers: UpdateApprovalRuleTemplateNameHeaders = field(default=None)
    request: shared.UpdateApprovalRuleTemplateNameInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateApprovalRuleTemplateNameResponse:
    approval_rule_template_does_not_exist_exception: Optional[Any] = field(default=None)
    approval_rule_template_name_already_exists_exception: Optional[Any] = field(default=None)
    approval_rule_template_name_required_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_approval_rule_template_name_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_approval_rule_template_name_output: Optional[shared.UpdateApprovalRuleTemplateNameOutput] = field(default=None)
    
