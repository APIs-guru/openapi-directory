from dataclasses import dataclass, field
from typing import Enum,Optional

class GetSetIdentityNotificationTopicActionEnum(str, Enum):
    SET_IDENTITY_NOTIFICATION_TOPIC = "SetIdentityNotificationTopic"

class GetSetIdentityNotificationTopicNotificationTypeEnum(str, Enum):
    BOUNCE = "Bounce"
    COMPLAINT = "Complaint"
    DELIVERY = "Delivery"

class GetSetIdentityNotificationTopicVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetSetIdentityNotificationTopicQueryParams:
    action: GetSetIdentityNotificationTopicActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    identity: str = field(default=None, metadata={'query_param': { 'field_name': 'Identity', 'style': 'form', 'explode': True }})
    notification_type: GetSetIdentityNotificationTopicNotificationTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'NotificationType', 'style': 'form', 'explode': True }})
    sns_topic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SnsTopic', 'style': 'form', 'explode': True }})
    version: GetSetIdentityNotificationTopicVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSetIdentityNotificationTopicHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetIdentityNotificationTopicRequest:
    query_params: GetSetIdentityNotificationTopicQueryParams = field(default=None)
    headers: GetSetIdentityNotificationTopicHeaders = field(default=None)
    

@dataclass
class GetSetIdentityNotificationTopicResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
