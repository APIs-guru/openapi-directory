from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListRepositoriesForApprovalRuleTemplateQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListRepositoriesForApprovalRuleTemplateXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_LIST_REPOSITORIES_FOR_APPROVAL_RULE_TEMPLATE = "CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate"


@dataclass
class ListRepositoriesForApprovalRuleTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ListRepositoriesForApprovalRuleTemplateXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ListRepositoriesForApprovalRuleTemplateRequest:
    query_params: ListRepositoriesForApprovalRuleTemplateQueryParams = field(default=None)
    headers: ListRepositoriesForApprovalRuleTemplateHeaders = field(default=None)
    request: shared.ListRepositoriesForApprovalRuleTemplateInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListRepositoriesForApprovalRuleTemplateResponse:
    approval_rule_template_does_not_exist_exception: Optional[Any] = field(default=None)
    approval_rule_template_name_required_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = field(default=None)
    encryption_key_disabled_exception: Optional[Any] = field(default=None)
    encryption_key_not_found_exception: Optional[Any] = field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = field(default=None)
    invalid_approval_rule_template_name_exception: Optional[Any] = field(default=None)
    invalid_continuation_token_exception: Optional[Any] = field(default=None)
    invalid_max_results_exception: Optional[Any] = field(default=None)
    list_repositories_for_approval_rule_template_output: Optional[shared.ListRepositoriesForApprovalRuleTemplateOutput] = field(default=None)
    status_code: int = field(default=None)
    
