from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateTopicRuleDestinationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateTopicRuleDestinationRequestBodyDestinationConfiguration:
    http_url_configuration: Optional[shared.HTTPURLDestinationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpUrlConfiguration' }})
    vpc_configuration: Optional[shared.VpcDestinationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcConfiguration' }})
    

@dataclass_json
@dataclass
class CreateTopicRuleDestinationRequestBody:
    destination_configuration: CreateTopicRuleDestinationRequestBodyDestinationConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationConfiguration' }})
    

@dataclass
class CreateTopicRuleDestinationRequest:
    headers: CreateTopicRuleDestinationHeaders = field(default=None)
    request: CreateTopicRuleDestinationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateTopicRuleDestinationResponse:
    conflicting_resource_update_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_topic_rule_destination_response: Optional[shared.CreateTopicRuleDestinationResponse] = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
