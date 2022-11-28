from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class ListTargetsByRuleXAmzTargetEnum(str, Enum):
    AWS_EVENTS_LIST_TARGETS_BY_RULE = "AWSEvents.ListTargetsByRule"


@dataclass
class ListTargetsByRuleHeaders:
    x_amz_target: ListTargetsByRuleXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListTargetsByRuleRequest:
    headers: ListTargetsByRuleHeaders = field()
    request: shared.ListTargetsByRuleRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListTargetsByRuleResponse:
    content_type: str = field()
    status_code: int = field()
    internal_exception: Optional[Any] = field(default=None)
    list_targets_by_rule_response: Optional[shared.ListTargetsByRuleResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    
