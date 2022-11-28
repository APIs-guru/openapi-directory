from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DescribeAssessmentTargetsXAmzTargetEnum(str, Enum):
    INSPECTOR_SERVICE_DESCRIBE_ASSESSMENT_TARGETS = "InspectorService.DescribeAssessmentTargets"


@dataclass
class DescribeAssessmentTargetsHeaders:
    x_amz_target: DescribeAssessmentTargetsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeAssessmentTargetsRequest:
    headers: DescribeAssessmentTargetsHeaders = field()
    request: shared.DescribeAssessmentTargetsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeAssessmentTargetsResponse:
    content_type: str = field()
    status_code: int = field()
    describe_assessment_targets_response: Optional[shared.DescribeAssessmentTargetsResponse] = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    
