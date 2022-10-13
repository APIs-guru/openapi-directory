from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateTopicRuleDestinationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class UpdateTopicRuleDestinationRequestBodyStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    IN_PROGRESS = "IN_PROGRESS"
    DISABLED = "DISABLED"
    ERROR = "ERROR"
    DELETING = "DELETING"


@dataclass_json
@dataclass
class UpdateTopicRuleDestinationRequestBody:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    status: UpdateTopicRuleDestinationRequestBodyStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class UpdateTopicRuleDestinationRequest:
    headers: UpdateTopicRuleDestinationHeaders = field(default=None)
    request: UpdateTopicRuleDestinationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateTopicRuleDestinationResponse:
    conflicting_resource_update_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    update_topic_rule_destination_response: Optional[dict[str, Any]] = field(default=None)
    
