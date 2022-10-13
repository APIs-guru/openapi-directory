from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListApprovalRuleTemplatesQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListApprovalRuleTemplatesXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_LIST_APPROVAL_RULE_TEMPLATES = "CodeCommit_20150413.ListApprovalRuleTemplates"


@dataclass
class ListApprovalRuleTemplatesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ListApprovalRuleTemplatesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ListApprovalRuleTemplatesRequest:
    query_params: ListApprovalRuleTemplatesQueryParams = field(default=None)
    headers: ListApprovalRuleTemplatesHeaders = field(default=None)
    request: shared.ListApprovalRuleTemplatesInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListApprovalRuleTemplatesResponse:
    content_type: str = field(default=None)
    invalid_continuation_token_exception: Optional[Any] = field(default=None)
    invalid_max_results_exception: Optional[Any] = field(default=None)
    list_approval_rule_templates_output: Optional[shared.ListApprovalRuleTemplatesOutput] = field(default=None)
    status_code: int = field(default=None)
    
