from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ConfirmTopicRuleDestinationPathParams:
    confirmation_token: str = field(default=None, metadata={'path_param': { 'field_name': 'confirmationToken', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConfirmTopicRuleDestinationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConfirmTopicRuleDestinationRequest:
    path_params: ConfirmTopicRuleDestinationPathParams = field(default=None)
    headers: ConfirmTopicRuleDestinationHeaders = field(default=None)
    

@dataclass
class ConfirmTopicRuleDestinationResponse:
    confirm_topic_rule_destination_response: Optional[dict[str, Any]] = field(default=None)
    conflicting_resource_update_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
