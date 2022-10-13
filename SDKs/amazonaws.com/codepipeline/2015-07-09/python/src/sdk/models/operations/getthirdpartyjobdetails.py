from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetThirdPartyJobDetailsXAmzTargetEnum(str, Enum):
    CODE_PIPELINE_20150709_GET_THIRD_PARTY_JOB_DETAILS = "CodePipeline_20150709.GetThirdPartyJobDetails"


@dataclass
class GetThirdPartyJobDetailsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetThirdPartyJobDetailsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetThirdPartyJobDetailsRequest:
    headers: GetThirdPartyJobDetailsHeaders = field(default=None)
    request: shared.GetThirdPartyJobDetailsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetThirdPartyJobDetailsResponse:
    content_type: str = field(default=None)
    get_third_party_job_details_output: Optional[shared.GetThirdPartyJobDetailsOutput] = field(default=None)
    invalid_client_token_exception: Optional[Any] = field(default=None)
    invalid_job_exception: Optional[Any] = field(default=None)
    job_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
