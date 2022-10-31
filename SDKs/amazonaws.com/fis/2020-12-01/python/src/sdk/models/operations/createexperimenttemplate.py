from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateExperimentTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateExperimentTemplateRequestBody:
    actions: dict[str, shared.CreateExperimentTemplateActionInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    stop_conditions: List[shared.CreateExperimentTemplateStopConditionInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopConditions' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    targets: Optional[dict[str, shared.CreateExperimentTemplateTargetInput]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    

@dataclass
class CreateExperimentTemplateRequest:
    headers: CreateExperimentTemplateHeaders = field(default=None)
    request: CreateExperimentTemplateRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateExperimentTemplateResponse:
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_experiment_template_response: Optional[shared.CreateExperimentTemplateResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
