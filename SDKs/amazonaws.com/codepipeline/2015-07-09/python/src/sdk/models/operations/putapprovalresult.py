from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class PutApprovalResultXAmzTargetEnum(str, Enum):
    CODE_PIPELINE_20150709_PUT_APPROVAL_RESULT = "CodePipeline_20150709.PutApprovalResult"


@dataclass
class PutApprovalResultHeaders:
    x_amz_target: PutApprovalResultXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutApprovalResultRequest:
    headers: PutApprovalResultHeaders = field()
    request: shared.PutApprovalResultInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutApprovalResultResponse:
    content_type: str = field()
    status_code: int = field()
    action_not_found_exception: Optional[Any] = field(default=None)
    approval_already_completed_exception: Optional[Any] = field(default=None)
    invalid_approval_token_exception: Optional[Any] = field(default=None)
    pipeline_not_found_exception: Optional[Any] = field(default=None)
    put_approval_result_output: Optional[shared.PutApprovalResultOutput] = field(default=None)
    stage_not_found_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
