from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateAlarmModelHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateAlarmModelRequestBodyAlarmCapabilities:
    acknowledge_flow: Optional[shared.AcknowledgeFlow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acknowledgeFlow' }})
    initialization_configuration: Optional[shared.InitializationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initializationConfiguration' }})
    

@dataclass_json
@dataclass
class CreateAlarmModelRequestBodyAlarmEventActions:
    alarm_actions: Optional[List[shared.AlarmAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmActions' }})
    

@dataclass_json
@dataclass
class CreateAlarmModelRequestBodyAlarmNotification:
    notification_actions: Optional[List[shared.NotificationAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationActions' }})
    

@dataclass_json
@dataclass
class CreateAlarmModelRequestBodyAlarmRule:
    simple_rule: Optional[shared.SimpleRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simpleRule' }})
    

@dataclass_json
@dataclass
class CreateAlarmModelRequestBody:
    alarm_capabilities: Optional[CreateAlarmModelRequestBodyAlarmCapabilities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmCapabilities' }})
    alarm_event_actions: Optional[CreateAlarmModelRequestBodyAlarmEventActions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmEventActions' }})
    alarm_model_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmModelDescription' }})
    alarm_model_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmModelName' }})
    alarm_notification: Optional[CreateAlarmModelRequestBodyAlarmNotification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmNotification' }})
    alarm_rule: CreateAlarmModelRequestBodyAlarmRule = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmRule' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    severity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateAlarmModelRequest:
    headers: CreateAlarmModelHeaders = field(default=None)
    request: CreateAlarmModelRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAlarmModelResponse:
    content_type: str = field(default=None)
    create_alarm_model_response: Optional[shared.CreateAlarmModelResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
