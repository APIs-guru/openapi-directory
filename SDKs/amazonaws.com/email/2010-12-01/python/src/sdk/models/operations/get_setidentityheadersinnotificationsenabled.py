from dataclasses import dataclass, field
from typing import Enum,Optional

class GetSetIdentityHeadersInNotificationsEnabledActionEnum(str, Enum):
    SET_IDENTITY_HEADERS_IN_NOTIFICATIONS_ENABLED = "SetIdentityHeadersInNotificationsEnabled"

class GetSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum(str, Enum):
    BOUNCE = "Bounce"
    COMPLAINT = "Complaint"
    DELIVERY = "Delivery"

class GetSetIdentityHeadersInNotificationsEnabledVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetSetIdentityHeadersInNotificationsEnabledQueryParams:
    action: GetSetIdentityHeadersInNotificationsEnabledActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    enabled: bool = field(default=None, metadata={'query_param': { 'field_name': 'Enabled', 'style': 'form', 'explode': True }})
    identity: str = field(default=None, metadata={'query_param': { 'field_name': 'Identity', 'style': 'form', 'explode': True }})
    notification_type: GetSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'NotificationType', 'style': 'form', 'explode': True }})
    version: GetSetIdentityHeadersInNotificationsEnabledVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSetIdentityHeadersInNotificationsEnabledHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetSetIdentityHeadersInNotificationsEnabledRequest:
    query_params: GetSetIdentityHeadersInNotificationsEnabledQueryParams = field(default=None)
    headers: GetSetIdentityHeadersInNotificationsEnabledHeaders = field(default=None)
    

@dataclass
class GetSetIdentityHeadersInNotificationsEnabledResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
