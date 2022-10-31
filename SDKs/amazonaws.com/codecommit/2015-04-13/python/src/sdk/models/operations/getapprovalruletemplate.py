from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetApprovalRuleTemplateXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_GET_APPROVAL_RULE_TEMPLATE = "CodeCommit_20150413.GetApprovalRuleTemplate"


@dataclass
class GetApprovalRuleTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GetApprovalRuleTemplateXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetApprovalRuleTemplateRequest:
    headers: GetApprovalRuleTemplateHeaders = field(default=None)
    request: shared.GetApprovalRuleTemplateInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetApprovalRuleTemplateResponse:
    approval_rule_template_does_not_exist_exception: Optional[Any] = field(default=None)
    approval_rule_template_name_required_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_approval_rule_template_output: Optional[shared.GetApprovalRuleTemplateOutput] = field(default=None)
    invalid_approval_rule_template_name_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
