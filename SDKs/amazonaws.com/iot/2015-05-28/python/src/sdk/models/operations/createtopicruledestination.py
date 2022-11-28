from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
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
    r"""CreateTopicRuleDestinationRequestBodyDestinationConfiguration
    Configuration of the topic rule destination.
    """
    
    http_url_configuration: Optional[shared.HTTPURLDestinationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpUrlConfiguration') }})
    vpc_configuration: Optional[shared.VpcDestinationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConfiguration') }})
    

@dataclass_json
@dataclass
class CreateTopicRuleDestinationRequestBody:
    destination_configuration: CreateTopicRuleDestinationRequestBodyDestinationConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationConfiguration') }})
    

@dataclass
class CreateTopicRuleDestinationRequest:
    headers: CreateTopicRuleDestinationHeaders = field()
    request: CreateTopicRuleDestinationRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateTopicRuleDestinationResponse:
    content_type: str = field()
    status_code: int = field()
    conflicting_resource_update_exception: Optional[Any] = field(default=None)
    create_topic_rule_destination_response: Optional[shared.CreateTopicRuleDestinationResponse] = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    
