from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class RemoveTargetsXAmzTargetEnum(str, Enum):
    AWS_EVENTS_REMOVE_TARGETS = "AWSEvents.RemoveTargets"


@dataclass
class RemoveTargetsHeaders:
    x_amz_target: RemoveTargetsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveTargetsRequest:
    headers: RemoveTargetsHeaders = field()
    request: shared.RemoveTargetsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RemoveTargetsResponse:
    content_type: str = field()
    status_code: int = field()
    concurrent_modification_exception: Optional[Any] = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    managed_rule_exception: Optional[Any] = field(default=None)
    remove_targets_response: Optional[shared.RemoveTargetsResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    
