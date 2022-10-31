from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListRuleNamesByTargetXAmzTargetEnum(str, Enum):
    AWS_EVENTS_LIST_RULE_NAMES_BY_TARGET = "AWSEvents.ListRuleNamesByTarget"


@dataclass
class ListRuleNamesByTargetHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListRuleNamesByTargetXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListRuleNamesByTargetRequest:
    headers: ListRuleNamesByTargetHeaders = field(default=None)
    request: shared.ListRuleNamesByTargetRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListRuleNamesByTargetResponse:
    content_type: str = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    list_rule_names_by_target_response: Optional[shared.ListRuleNamesByTargetResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
