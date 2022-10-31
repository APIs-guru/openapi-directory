from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListAssociatedApprovalRuleTemplatesForRepositoryQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListAssociatedApprovalRuleTemplatesForRepositoryXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_LIST_ASSOCIATED_APPROVAL_RULE_TEMPLATES_FOR_REPOSITORY = "CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository"


@dataclass
class ListAssociatedApprovalRuleTemplatesForRepositoryHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListAssociatedApprovalRuleTemplatesForRepositoryXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListAssociatedApprovalRuleTemplatesForRepositoryRequest:
    query_params: ListAssociatedApprovalRuleTemplatesForRepositoryQueryParams = field(default=None)
    headers: ListAssociatedApprovalRuleTemplatesForRepositoryHeaders = field(default=None)
    request: shared.ListAssociatedApprovalRuleTemplatesForRepositoryInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListAssociatedApprovalRuleTemplatesForRepositoryResponse:
    content_type: str = field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = field(default=None)
    encryption_key_disabled_exception: Optional[Any] = field(default=None)
    encryption_key_not_found_exception: Optional[Any] = field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = field(default=None)
    invalid_continuation_token_exception: Optional[Any] = field(default=None)
    invalid_max_results_exception: Optional[Any] = field(default=None)
    invalid_repository_name_exception: Optional[Any] = field(default=None)
    list_associated_approval_rule_templates_for_repository_output: Optional[shared.ListAssociatedApprovalRuleTemplatesForRepositoryOutput] = field(default=None)
    repository_does_not_exist_exception: Optional[Any] = field(default=None)
    repository_name_required_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
