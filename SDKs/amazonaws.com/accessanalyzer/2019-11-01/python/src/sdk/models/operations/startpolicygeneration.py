from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class StartPolicyGenerationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class StartPolicyGenerationRequestBodyCloudTrailDetails:
    r"""StartPolicyGenerationRequestBodyCloudTrailDetails
    Contains information about CloudTrail access.
    """
    
    access_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessRole') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    trails: Optional[List[shared.Trail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trails') }})
    

@dataclass_json
@dataclass
class StartPolicyGenerationRequestBodyPolicyGenerationDetails:
    r"""StartPolicyGenerationRequestBodyPolicyGenerationDetails
    Contains the ARN details about the IAM entity for which the policy is generated.
    """
    
    principal_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principalArn') }})
    

@dataclass_json
@dataclass
class StartPolicyGenerationRequestBody:
    policy_generation_details: StartPolicyGenerationRequestBodyPolicyGenerationDetails = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyGenerationDetails') }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    cloud_trail_details: Optional[StartPolicyGenerationRequestBodyCloudTrailDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudTrailDetails') }})
    

@dataclass
class StartPolicyGenerationRequest:
    headers: StartPolicyGenerationHeaders = field()
    request: StartPolicyGenerationRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartPolicyGenerationResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    start_policy_generation_response: Optional[shared.StartPolicyGenerationResponse] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
