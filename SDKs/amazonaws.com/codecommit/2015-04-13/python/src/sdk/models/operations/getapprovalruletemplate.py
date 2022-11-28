from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class GetApprovalRuleTemplateXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_GET_APPROVAL_RULE_TEMPLATE = "CodeCommit_20150413.GetApprovalRuleTemplate"


@dataclass
class GetApprovalRuleTemplateHeaders:
    x_amz_target: GetApprovalRuleTemplateXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetApprovalRuleTemplateRequest:
    headers: GetApprovalRuleTemplateHeaders = field()
    request: shared.GetApprovalRuleTemplateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetApprovalRuleTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    approval_rule_template_does_not_exist_exception: Optional[Any] = field(default=None)
    approval_rule_template_name_required_exception: Optional[Any] = field(default=None)
    get_approval_rule_template_output: Optional[shared.GetApprovalRuleTemplateOutput] = field(default=None)
    invalid_approval_rule_template_name_exception: Optional[Any] = field(default=None)
    
