from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class BatchDisassociateApprovalRuleTemplateFromRepositoriesXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_BATCH_DISASSOCIATE_APPROVAL_RULE_TEMPLATE_FROM_REPOSITORIES = "CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories"


@dataclass
class BatchDisassociateApprovalRuleTemplateFromRepositoriesHeaders:
    x_amz_target: BatchDisassociateApprovalRuleTemplateFromRepositoriesXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class BatchDisassociateApprovalRuleTemplateFromRepositoriesRequest:
    headers: BatchDisassociateApprovalRuleTemplateFromRepositoriesHeaders = field()
    request: shared.BatchDisassociateApprovalRuleTemplateFromRepositoriesInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchDisassociateApprovalRuleTemplateFromRepositoriesResponse:
    content_type: str = field()
    status_code: int = field()
    approval_rule_template_does_not_exist_exception: Optional[Any] = field(default=None)
    approval_rule_template_name_required_exception: Optional[Any] = field(default=None)
    batch_disassociate_approval_rule_template_from_repositories_output: Optional[shared.BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput] = field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = field(default=None)
    encryption_key_disabled_exception: Optional[Any] = field(default=None)
    encryption_key_not_found_exception: Optional[Any] = field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = field(default=None)
    invalid_approval_rule_template_name_exception: Optional[Any] = field(default=None)
    maximum_repository_names_exceeded_exception: Optional[Any] = field(default=None)
    repository_names_required_exception: Optional[Any] = field(default=None)
    
