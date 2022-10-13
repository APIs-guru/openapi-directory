from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateEventSubscriptionXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_CREATE_EVENT_SUBSCRIPTION = "AmazonDMSv20160101.CreateEventSubscription"


@dataclass
class CreateEventSubscriptionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateEventSubscriptionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateEventSubscriptionRequest:
    headers: CreateEventSubscriptionHeaders = field(default=None)
    request: shared.CreateEventSubscriptionMessage = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateEventSubscriptionResponse:
    content_type: str = field(default=None)
    create_event_subscription_response: Optional[shared.CreateEventSubscriptionResponse] = field(default=None)
    kms_access_denied_fault: Optional[Any] = field(default=None)
    kms_disabled_fault: Optional[Any] = field(default=None)
    kms_invalid_state_fault: Optional[Any] = field(default=None)
    kms_not_found_fault: Optional[Any] = field(default=None)
    kms_throttling_fault: Optional[Any] = field(default=None)
    resource_already_exists_fault: Optional[Any] = field(default=None)
    resource_not_found_fault: Optional[Any] = field(default=None)
    resource_quota_exceeded_fault: Optional[Any] = field(default=None)
    sns_invalid_topic_fault: Optional[Any] = field(default=None)
    sns_no_authorization_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
