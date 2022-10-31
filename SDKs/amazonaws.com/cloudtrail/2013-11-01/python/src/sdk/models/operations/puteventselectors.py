from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PutEventSelectorsXAmzTargetEnum(str, Enum):
    COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL_20131101_PUT_EVENT_SELECTORS = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors"


@dataclass
class PutEventSelectorsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: PutEventSelectorsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutEventSelectorsRequest:
    headers: PutEventSelectorsHeaders = field(default=None)
    request: shared.PutEventSelectorsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutEventSelectorsResponse:
    content_type: str = field(default=None)
    insufficient_dependency_service_access_permission_exception: Optional[Any] = field(default=None)
    invalid_event_selectors_exception: Optional[Any] = field(default=None)
    invalid_home_region_exception: Optional[Any] = field(default=None)
    invalid_trail_name_exception: Optional[Any] = field(default=None)
    not_organization_master_account_exception: Optional[Any] = field(default=None)
    operation_not_permitted_exception: Optional[Any] = field(default=None)
    put_event_selectors_response: Optional[shared.PutEventSelectorsResponse] = field(default=None)
    status_code: int = field(default=None)
    trail_not_found_exception: Optional[Any] = field(default=None)
    unsupported_operation_exception: Optional[Any] = field(default=None)
    
