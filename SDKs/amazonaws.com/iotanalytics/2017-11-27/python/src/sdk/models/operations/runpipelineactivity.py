from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class RunPipelineActivityHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class RunPipelineActivityRequestBodyPipelineActivity:
    add_attributes: Optional[shared.AddAttributesActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addAttributes' }})
    channel: Optional[shared.ChannelActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    datastore: Optional[shared.DatastoreActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datastore' }})
    device_registry_enrich: Optional[shared.DeviceRegistryEnrichActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceRegistryEnrich' }})
    device_shadow_enrich: Optional[shared.DeviceShadowEnrichActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceShadowEnrich' }})
    filter: Optional[shared.FilterActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    lambda_: Optional[shared.LambdaActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambda' }})
    math: Optional[shared.MathActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'math' }})
    remove_attributes: Optional[shared.RemoveAttributesActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removeAttributes' }})
    select_attributes: Optional[shared.SelectAttributesActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectAttributes' }})
    

@dataclass_json
@dataclass
class RunPipelineActivityRequestBody:
    payloads: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payloads' }})
    pipeline_activity: RunPipelineActivityRequestBodyPipelineActivity = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineActivity' }})
    

@dataclass
class RunPipelineActivityRequest:
    headers: RunPipelineActivityHeaders = field(default=None)
    request: RunPipelineActivityRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RunPipelineActivityResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    run_pipeline_activity_response: Optional[shared.RunPipelineActivityResponse] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
