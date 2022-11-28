from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class PutThirdPartyJobSuccessResultXAmzTargetEnum(str, Enum):
    CODE_PIPELINE_20150709_PUT_THIRD_PARTY_JOB_SUCCESS_RESULT = "CodePipeline_20150709.PutThirdPartyJobSuccessResult"


@dataclass
class PutThirdPartyJobSuccessResultHeaders:
    x_amz_target: PutThirdPartyJobSuccessResultXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutThirdPartyJobSuccessResultRequest:
    headers: PutThirdPartyJobSuccessResultHeaders = field()
    request: shared.PutThirdPartyJobSuccessResultInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutThirdPartyJobSuccessResultResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_client_token_exception: Optional[Any] = field(default=None)
    invalid_job_state_exception: Optional[Any] = field(default=None)
    job_not_found_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
