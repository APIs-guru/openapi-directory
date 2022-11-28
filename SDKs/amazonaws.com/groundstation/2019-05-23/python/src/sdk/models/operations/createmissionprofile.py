from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateMissionProfileHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateMissionProfileRequestBody:
    dataflow_edges: List[List[str]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataflowEdges') }})
    minimum_viable_contact_duration_seconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumViableContactDurationSeconds') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    tracking_config_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingConfigArn') }})
    contact_post_pass_duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactPostPassDurationSeconds') }})
    contact_pre_pass_duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactPrePassDurationSeconds') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateMissionProfileRequest:
    headers: CreateMissionProfileHeaders = field()
    request: CreateMissionProfileRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateMissionProfileResponse:
    content_type: str = field()
    status_code: int = field()
    dependency_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    mission_profile_id_response: Optional[shared.MissionProfileIDResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    
