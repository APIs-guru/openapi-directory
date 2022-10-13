from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PollForThirdPartyJobsXAmzTargetEnum(str, Enum):
    CODE_PIPELINE_20150709_POLL_FOR_THIRD_PARTY_JOBS = "CodePipeline_20150709.PollForThirdPartyJobs"


@dataclass
class PollForThirdPartyJobsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: PollForThirdPartyJobsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class PollForThirdPartyJobsRequest:
    headers: PollForThirdPartyJobsHeaders = field(default=None)
    request: shared.PollForThirdPartyJobsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PollForThirdPartyJobsResponse:
    action_type_not_found_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    poll_for_third_party_jobs_output: Optional[shared.PollForThirdPartyJobsOutput] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
