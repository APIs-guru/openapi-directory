from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class AcknowledgeThirdPartyJobXAmzTargetEnum(str, Enum):
    CODE_PIPELINE_20150709_ACKNOWLEDGE_THIRD_PARTY_JOB = "CodePipeline_20150709.AcknowledgeThirdPartyJob"


@dataclass
class AcknowledgeThirdPartyJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: AcknowledgeThirdPartyJobXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class AcknowledgeThirdPartyJobRequest:
    headers: AcknowledgeThirdPartyJobHeaders = field(default=None)
    request: shared.AcknowledgeThirdPartyJobInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AcknowledgeThirdPartyJobResponse:
    acknowledge_third_party_job_output: Optional[shared.AcknowledgeThirdPartyJobOutput] = field(default=None)
    content_type: str = field(default=None)
    invalid_client_token_exception: Optional[Any] = field(default=None)
    invalid_nonce_exception: Optional[Any] = field(default=None)
    job_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
