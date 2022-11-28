from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateAlarmModelHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateAlarmModelRequestBodyAlarmCapabilities:
    r"""CreateAlarmModelRequestBodyAlarmCapabilities
    Contains the configuration information of alarm state changes.
    """
    
    acknowledge_flow: Optional[shared.AcknowledgeFlow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acknowledgeFlow') }})
    initialization_configuration: Optional[shared.InitializationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initializationConfiguration') }})
    

@dataclass_json
@dataclass
class CreateAlarmModelRequestBodyAlarmEventActions:
    r"""CreateAlarmModelRequestBodyAlarmEventActions
    Contains information about one or more alarm actions.
    """
    
    alarm_actions: Optional[List[shared.AlarmAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmActions') }})
    

@dataclass_json
@dataclass
class CreateAlarmModelRequestBodyAlarmNotification:
    r"""CreateAlarmModelRequestBodyAlarmNotification
    Contains information about one or more notification actions.
    """
    
    notification_actions: Optional[List[shared.NotificationAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationActions') }})
    

@dataclass_json
@dataclass
class CreateAlarmModelRequestBodyAlarmRule:
    r"""CreateAlarmModelRequestBodyAlarmRule
    Defines when your alarm is invoked.
    """
    
    simple_rule: Optional[shared.SimpleRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simpleRule') }})
    

@dataclass_json
@dataclass
class CreateAlarmModelRequestBody:
    alarm_model_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmModelName') }})
    alarm_rule: CreateAlarmModelRequestBodyAlarmRule = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmRule') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    alarm_capabilities: Optional[CreateAlarmModelRequestBodyAlarmCapabilities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmCapabilities') }})
    alarm_event_actions: Optional[CreateAlarmModelRequestBodyAlarmEventActions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmEventActions') }})
    alarm_model_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmModelDescription') }})
    alarm_notification: Optional[CreateAlarmModelRequestBodyAlarmNotification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmNotification') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    severity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateAlarmModelRequest:
    headers: CreateAlarmModelHeaders = field()
    request: CreateAlarmModelRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAlarmModelResponse:
    content_type: str = field()
    status_code: int = field()
    create_alarm_model_response: Optional[shared.CreateAlarmModelResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
