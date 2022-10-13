from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DeletePullRequestApprovalRuleXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_DELETE_PULL_REQUEST_APPROVAL_RULE = "CodeCommit_20150413.DeletePullRequestApprovalRule"


@dataclass
class DeletePullRequestApprovalRuleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DeletePullRequestApprovalRuleXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DeletePullRequestApprovalRuleRequest:
    headers: DeletePullRequestApprovalRuleHeaders = field(default=None)
    request: shared.DeletePullRequestApprovalRuleInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeletePullRequestApprovalRuleResponse:
    approval_rule_name_required_exception: Optional[Any] = field(default=None)
    cannot_delete_approval_rule_from_template_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    delete_pull_request_approval_rule_output: Optional[shared.DeletePullRequestApprovalRuleOutput] = field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = field(default=None)
    encryption_key_disabled_exception: Optional[Any] = field(default=None)
    encryption_key_not_found_exception: Optional[Any] = field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = field(default=None)
    invalid_approval_rule_name_exception: Optional[Any] = field(default=None)
    invalid_pull_request_id_exception: Optional[Any] = field(default=None)
    pull_request_already_closed_exception: Optional[Any] = field(default=None)
    pull_request_does_not_exist_exception: Optional[Any] = field(default=None)
    pull_request_id_required_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
