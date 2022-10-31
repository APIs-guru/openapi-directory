from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdatePortalPathParams:
    portal_id: str = field(default=None, metadata={'path_param': { 'field_name': 'portalId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePortalHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdatePortalRequestBodyAlarms:
    alarm_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmRoleArn' }})
    notification_lambda_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationLambdaArn' }})
    

@dataclass_json
@dataclass
class UpdatePortalRequestBodyPortalLogoImage:
    file: Optional[shared.ImageFile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class UpdatePortalRequestBody:
    alarms: Optional[UpdatePortalRequestBodyAlarms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarms' }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    notification_sender_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationSenderEmail' }})
    portal_contact_email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalContactEmail' }})
    portal_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalDescription' }})
    portal_logo_image: Optional[UpdatePortalRequestBodyPortalLogoImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalLogoImage' }})
    portal_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalName' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    

@dataclass
class UpdatePortalRequest:
    path_params: UpdatePortalPathParams = field(default=None)
    headers: UpdatePortalHeaders = field(default=None)
    request: UpdatePortalRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdatePortalResponse:
    conflicting_operation_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_portal_response: Optional[shared.UpdatePortalResponse] = field(default=None)
    
