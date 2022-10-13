from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreatePortalHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreatePortalRequestBodyAlarms:
    alarm_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmRoleArn' }})
    notification_lambda_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationLambdaArn' }})
    
class CreatePortalRequestBodyPortalAuthModeEnum(str, Enum):
    IAM = "IAM"
    SSO = "SSO"


@dataclass_json
@dataclass
class CreatePortalRequestBodyPortalLogoImageFile:
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    type: Optional[shared.ImageFileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class CreatePortalRequestBody:
    alarms: Optional[CreatePortalRequestBodyAlarms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarms' }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    notification_sender_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationSenderEmail' }})
    portal_auth_mode: Optional[CreatePortalRequestBodyPortalAuthModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalAuthMode' }})
    portal_contact_email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalContactEmail' }})
    portal_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalDescription' }})
    portal_logo_image_file: Optional[CreatePortalRequestBodyPortalLogoImageFile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalLogoImageFile' }})
    portal_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalName' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreatePortalRequest:
    headers: CreatePortalHeaders = field(default=None)
    request: CreatePortalRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreatePortalResponse:
    content_type: str = field(default=None)
    create_portal_response: Optional[shared.CreatePortalResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
