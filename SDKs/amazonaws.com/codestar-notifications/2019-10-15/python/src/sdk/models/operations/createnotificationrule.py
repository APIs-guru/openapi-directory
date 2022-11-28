from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateNotificationRuleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateNotificationRuleRequestBodyDetailTypeEnum(str, Enum):
    BASIC = "BASIC"
    FULL = "FULL"

class CreateNotificationRuleRequestBodyStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class CreateNotificationRuleRequestBody:
    detail_type: CreateNotificationRuleRequestBodyDetailTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetailType') }})
    event_type_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventTypeIds') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    resource: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resource') }})
    targets: List[shared.Target] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Targets') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    status: Optional[CreateNotificationRuleRequestBodyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

@dataclass
class CreateNotificationRuleRequest:
    headers: CreateNotificationRuleHeaders = field()
    request: CreateNotificationRuleRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNotificationRuleResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    concurrent_modification_exception: Optional[Any] = field(default=None)
    configuration_exception: Optional[Any] = field(default=None)
    create_notification_rule_result: Optional[shared.CreateNotificationRuleResult] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
