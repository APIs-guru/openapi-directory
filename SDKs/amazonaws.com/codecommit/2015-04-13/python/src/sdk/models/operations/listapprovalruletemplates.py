from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListApprovalRuleTemplatesQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListApprovalRuleTemplatesXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_LIST_APPROVAL_RULE_TEMPLATES = "CodeCommit_20150413.ListApprovalRuleTemplates"


@dataclass
class ListApprovalRuleTemplatesHeaders:
    x_amz_target: ListApprovalRuleTemplatesXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListApprovalRuleTemplatesRequest:
    headers: ListApprovalRuleTemplatesHeaders = field()
    query_params: ListApprovalRuleTemplatesQueryParams = field()
    request: shared.ListApprovalRuleTemplatesInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListApprovalRuleTemplatesResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_continuation_token_exception: Optional[Any] = field(default=None)
    invalid_max_results_exception: Optional[Any] = field(default=None)
    list_approval_rule_templates_output: Optional[shared.ListApprovalRuleTemplatesOutput] = field(default=None)
    
