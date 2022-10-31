from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateAlarmModelPathParams:
    alarm_model_name: str = field(default=None, metadata={'path_param': { 'field_name': 'alarmModelName', 'style': 'simple', 'explode': False }})
    

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
    acknowledge_flow: Optional[shared.AcknowledgeFlow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acknowledgeFlow' }})
    initialization_configuration: Optional[shared.InitializationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initializationConfiguration' }})
    

@dataclass_json
@dataclass
class UpdateAlarmModelRequestBodyAlarmEventActions:
    alarm_actions: Optional[List[shared.AlarmAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmActions' }})
    

@dataclass_json
@dataclass
class UpdateAlarmModelRequestBodyAlarmNotification:
    notification_actions: Optional[List[shared.NotificationAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationActions' }})
    

@dataclass_json
@dataclass
class UpdateAlarmModelRequestBodyAlarmRule:
    simple_rule: Optional[shared.SimpleRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simpleRule' }})
    

@dataclass_json
@dataclass
class UpdateAlarmModelRequestBody:
    alarm_capabilities: Optional[UpdateAlarmModelRequestBodyAlarmCapabilities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmCapabilities' }})
    alarm_event_actions: Optional[UpdateAlarmModelRequestBodyAlarmEventActions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmEventActions' }})
    alarm_model_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmModelDescription' }})
    alarm_notification: Optional[UpdateAlarmModelRequestBodyAlarmNotification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmNotification' }})
    alarm_rule: UpdateAlarmModelRequestBodyAlarmRule = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmRule' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    severity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    

@dataclass
class UpdateAlarmModelRequest:
    path_params: UpdateAlarmModelPathParams = field(default=None)
    headers: UpdateAlarmModelHeaders = field(default=None)
    request: UpdateAlarmModelRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAlarmModelResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_alarm_model_response: Optional[shared.UpdateAlarmModelResponse] = field(default=None)
    
