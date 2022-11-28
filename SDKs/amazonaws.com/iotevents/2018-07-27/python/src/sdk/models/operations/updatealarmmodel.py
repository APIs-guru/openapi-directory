from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateAlarmModelPathParams:
    alarm_model_name: str = field(metadata={'path_param': { 'field_name': 'alarmModelName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAlarmModelHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateAlarmModelRequestBodyAlarmCapabilities:
    r"""UpdateAlarmModelRequestBodyAlarmCapabilities
    Contains the configuration information of alarm state changes.
    """
    
    acknowledge_flow: Optional[shared.AcknowledgeFlow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acknowledgeFlow') }})
    initialization_configuration: Optional[shared.InitializationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initializationConfiguration') }})
    

@dataclass_json
@dataclass
class UpdateAlarmModelRequestBodyAlarmEventActions:
    r"""UpdateAlarmModelRequestBodyAlarmEventActions
    Contains information about one or more alarm actions.
    """
    
    alarm_actions: Optional[List[shared.AlarmAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmActions') }})
    

@dataclass_json
@dataclass
class UpdateAlarmModelRequestBodyAlarmNotification:
    r"""UpdateAlarmModelRequestBodyAlarmNotification
    Contains information about one or more notification actions.
    """
    
    notification_actions: Optional[List[shared.NotificationAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationActions') }})
    

@dataclass_json
@dataclass
class UpdateAlarmModelRequestBodyAlarmRule:
    r"""UpdateAlarmModelRequestBodyAlarmRule
    Defines when your alarm is invoked.
    """
    
    simple_rule: Optional[shared.SimpleRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simpleRule') }})
    

@dataclass_json
@dataclass
class UpdateAlarmModelRequestBody:
    alarm_rule: UpdateAlarmModelRequestBodyAlarmRule = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmRule') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    alarm_capabilities: Optional[UpdateAlarmModelRequestBodyAlarmCapabilities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmCapabilities') }})
    alarm_event_actions: Optional[UpdateAlarmModelRequestBodyAlarmEventActions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmEventActions') }})
    alarm_model_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmModelDescription') }})
    alarm_notification: Optional[UpdateAlarmModelRequestBodyAlarmNotification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmNotification') }})
    severity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    

@dataclass
class UpdateAlarmModelRequest:
    headers: UpdateAlarmModelHeaders = field()
    path_params: UpdateAlarmModelPathParams = field()
    request: UpdateAlarmModelRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAlarmModelResponse:
    content_type: str = field()
    status_code: int = field()
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_alarm_model_response: Optional[shared.UpdateAlarmModelResponse] = field(default=None)
    
