from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateNotificationRuleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateNotificationRuleRequestBodyDetailTypeEnum(str, Enum):
    BASIC = "BASIC"
    FULL = "FULL"

class UpdateNotificationRuleRequestBodyStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class UpdateNotificationRuleRequestBody:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    detail_type: Optional[UpdateNotificationRuleRequestBodyDetailTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DetailType' }})
    event_type_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventTypeIds' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    status: Optional[UpdateNotificationRuleRequestBodyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    targets: Optional[List[shared.Target]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Targets' }})
    

@dataclass
class UpdateNotificationRuleRequest:
    headers: UpdateNotificationRuleHeaders = field(default=None)
    request: UpdateNotificationRuleRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNotificationRuleResponse:
    content_type: str = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_notification_rule_result: Optional[dict[str, Any]] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
