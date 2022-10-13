from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PutInsightSelectorsXAmzTargetEnum(str, Enum):
    COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL_20131101_PUT_INSIGHT_SELECTORS = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors"


@dataclass
class PutInsightSelectorsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: PutInsightSelectorsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class PutInsightSelectorsRequest:
    headers: PutInsightSelectorsHeaders = field(default=None)
    request: shared.PutInsightSelectorsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutInsightSelectorsResponse:
    content_type: str = field(default=None)
    insufficient_encryption_policy_exception: Optional[Any] = field(default=None)
    insufficient_s3_bucket_policy_exception: Optional[Any] = field(default=None)
    invalid_home_region_exception: Optional[Any] = field(default=None)
    invalid_insight_selectors_exception: Optional[Any] = field(default=None)
    invalid_trail_name_exception: Optional[Any] = field(default=None)
    kms_exception: Optional[Any] = field(default=None)
    not_organization_master_account_exception: Optional[Any] = field(default=None)
    operation_not_permitted_exception: Optional[Any] = field(default=None)
    put_insight_selectors_response: Optional[shared.PutInsightSelectorsResponse] = field(default=None)
    s3_bucket_does_not_exist_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    trail_not_found_exception: Optional[Any] = field(default=None)
    unsupported_operation_exception: Optional[Any] = field(default=None)
    
