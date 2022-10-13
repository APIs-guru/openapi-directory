from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateExperimentTemplatePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateExperimentTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateExperimentTemplateRequestBody:
    actions: Optional[dict[str, shared.UpdateExperimentTemplateActionInputItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    stop_conditions: Optional[List[shared.UpdateExperimentTemplateStopConditionInput]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopConditions' }})
    targets: Optional[dict[str, shared.UpdateExperimentTemplateTargetInput]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    

@dataclass
class UpdateExperimentTemplateRequest:
    path_params: UpdateExperimentTemplatePathParams = field(default=None)
    headers: UpdateExperimentTemplateHeaders = field(default=None)
    request: UpdateExperimentTemplateRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateExperimentTemplateResponse:
    content_type: str = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_experiment_template_response: Optional[shared.UpdateExperimentTemplateResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
