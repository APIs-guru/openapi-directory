from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_BATCH_ASSOCIATE_APPROVAL_RULE_TEMPLATE_WITH_REPOSITORIES = "CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories"


@dataclass
class BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class BatchAssociateApprovalRuleTemplateWithRepositoriesRequest:
    headers: BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders = field(default=None)
    request: shared.BatchAssociateApprovalRuleTemplateWithRepositoriesInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchAssociateApprovalRuleTemplateWithRepositoriesResponse:
    approval_rule_template_does_not_exist_exception: Optional[Any] = field(default=None)
    approval_rule_template_name_required_exception: Optional[Any] = field(default=None)
    batch_associate_approval_rule_template_with_repositories_output: Optional[shared.BatchAssociateApprovalRuleTemplateWithRepositoriesOutput] = field(default=None)
    content_type: str = field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = field(default=None)
    encryption_key_disabled_exception: Optional[Any] = field(default=None)
    encryption_key_not_found_exception: Optional[Any] = field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = field(default=None)
    invalid_approval_rule_template_name_exception: Optional[Any] = field(default=None)
    maximum_repository_names_exceeded_exception: Optional[Any] = field(default=None)
    repository_names_required_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
