from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateApprovalRuleTemplateXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_CREATE_APPROVAL_RULE_TEMPLATE = "CodeCommit_20150413.CreateApprovalRuleTemplate"


@dataclass
class CreateApprovalRuleTemplateHeaders:
    x_amz_target: CreateApprovalRuleTemplateXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateApprovalRuleTemplateRequest:
    headers: CreateApprovalRuleTemplateHeaders = field()
    request: shared.CreateApprovalRuleTemplateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateApprovalRuleTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    approval_rule_template_content_required_exception: Optional[Any] = field(default=None)
    approval_rule_template_name_already_exists_exception: Optional[Any] = field(default=None)
    approval_rule_template_name_required_exception: Optional[Any] = field(default=None)
    create_approval_rule_template_output: Optional[shared.CreateApprovalRuleTemplateOutput] = field(default=None)
    invalid_approval_rule_template_content_exception: Optional[Any] = field(default=None)
    invalid_approval_rule_template_description_exception: Optional[Any] = field(default=None)
    invalid_approval_rule_template_name_exception: Optional[Any] = field(default=None)
    number_of_rule_templates_exceeded_exception: Optional[Any] = field(default=None)
    
