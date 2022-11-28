from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class PollForThirdPartyJobsXAmzTargetEnum(str, Enum):
    CODE_PIPELINE_20150709_POLL_FOR_THIRD_PARTY_JOBS = "CodePipeline_20150709.PollForThirdPartyJobs"


@dataclass
class PollForThirdPartyJobsHeaders:
    x_amz_target: PollForThirdPartyJobsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class PollForThirdPartyJobsRequest:
    headers: PollForThirdPartyJobsHeaders = field()
    request: shared.PollForThirdPartyJobsInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PollForThirdPartyJobsResponse:
    content_type: str = field()
    status_code: int = field()
    action_type_not_found_exception: Optional[Any] = field(default=None)
    poll_for_third_party_jobs_output: Optional[shared.PollForThirdPartyJobsOutput] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
