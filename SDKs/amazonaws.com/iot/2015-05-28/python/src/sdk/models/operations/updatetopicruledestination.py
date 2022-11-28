from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateTopicRuleDestinationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateTopicRuleDestinationRequestBodyStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    IN_PROGRESS = "IN_PROGRESS"
    DISABLED = "DISABLED"
    ERROR = "ERROR"
    DELETING = "DELETING"


@dataclass_json
@dataclass
class UpdateTopicRuleDestinationRequestBody:
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    status: UpdateTopicRuleDestinationRequestBodyStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class UpdateTopicRuleDestinationRequest:
    headers: UpdateTopicRuleDestinationHeaders = field()
    request: UpdateTopicRuleDestinationRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateTopicRuleDestinationResponse:
    content_type: str = field()
    status_code: int = field()
    conflicting_resource_update_exception: Optional[Any] = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    update_topic_rule_destination_response: Optional[dict[str, Any]] = field(default=None)
    
