from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateExperimentTemplatePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateExperimentTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateExperimentTemplateRequestBody:
    actions: Optional[dict[str, shared.UpdateExperimentTemplateActionInputItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    stop_conditions: Optional[List[shared.UpdateExperimentTemplateStopConditionInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopConditions') }})
    targets: Optional[dict[str, shared.UpdateExperimentTemplateTargetInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    

@dataclass
class UpdateExperimentTemplateRequest:
    headers: UpdateExperimentTemplateHeaders = field()
    path_params: UpdateExperimentTemplatePathParams = field()
    request: UpdateExperimentTemplateRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateExperimentTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    update_experiment_template_response: Optional[shared.UpdateExperimentTemplateResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
