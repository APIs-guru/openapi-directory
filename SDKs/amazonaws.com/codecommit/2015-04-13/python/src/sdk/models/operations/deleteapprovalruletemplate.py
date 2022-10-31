from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DeleteApprovalRuleTemplateXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_DELETE_APPROVAL_RULE_TEMPLATE = "CodeCommit_20150413.DeleteApprovalRuleTemplate"


@dataclass
class DeleteApprovalRuleTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DeleteApprovalRuleTemplateXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteApprovalRuleTemplateRequest:
    headers: DeleteApprovalRuleTemplateHeaders = field(default=None)
    request: shared.DeleteApprovalRuleTemplateInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteApprovalRuleTemplateResponse:
    approval_rule_template_in_use_exception: Optional[Any] = field(default=None)
    approval_rule_template_name_required_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    delete_approval_rule_template_output: Optional[shared.DeleteApprovalRuleTemplateOutput] = field(default=None)
    invalid_approval_rule_template_name_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
