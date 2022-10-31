from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
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
    access_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessRole' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    trails: Optional[List[shared.Trail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trails' }})
    

@dataclass_json
@dataclass
class StartPolicyGenerationRequestBodyPolicyGenerationDetails:
    principal_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principalArn' }})
    

@dataclass_json
@dataclass
class StartPolicyGenerationRequestBody:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    cloud_trail_details: Optional[StartPolicyGenerationRequestBodyCloudTrailDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudTrailDetails' }})
    policy_generation_details: StartPolicyGenerationRequestBodyPolicyGenerationDetails = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyGenerationDetails' }})
    

@dataclass
class StartPolicyGenerationRequest:
    headers: StartPolicyGenerationHeaders = field(default=None)
    request: StartPolicyGenerationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartPolicyGenerationResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    start_policy_generation_response: Optional[shared.StartPolicyGenerationResponse] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
