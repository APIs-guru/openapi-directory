from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class ListRuleNamesByTargetXAmzTargetEnum(str, Enum):
    AWS_EVENTS_LIST_RULE_NAMES_BY_TARGET = "AWSEvents.ListRuleNamesByTarget"


@dataclass
class ListRuleNamesByTargetHeaders:
    x_amz_target: ListRuleNamesByTargetXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListRuleNamesByTargetRequest:
    headers: ListRuleNamesByTargetHeaders = field()
    request: shared.ListRuleNamesByTargetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListRuleNamesByTargetResponse:
    content_type: str = field()
    status_code: int = field()
    internal_exception: Optional[Any] = field(default=None)
    list_rule_names_by_target_response: Optional[shared.ListRuleNamesByTargetResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    
