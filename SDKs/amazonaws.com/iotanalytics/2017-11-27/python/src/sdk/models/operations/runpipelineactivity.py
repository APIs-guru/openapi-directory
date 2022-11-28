from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class RunPipelineActivityHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RunPipelineActivityRequestBodyPipelineActivity:
    r"""RunPipelineActivityRequestBodyPipelineActivity
    An activity that performs a transformation on a message.
    """
    
    add_attributes: Optional[shared.AddAttributesActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addAttributes') }})
    channel: Optional[shared.ChannelActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    datastore: Optional[shared.DatastoreActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datastore') }})
    device_registry_enrich: Optional[shared.DeviceRegistryEnrichActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceRegistryEnrich') }})
    device_shadow_enrich: Optional[shared.DeviceShadowEnrichActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceShadowEnrich') }})
    filter: Optional[shared.FilterActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    lambda_: Optional[shared.LambdaActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambda') }})
    math: Optional[shared.MathActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('math') }})
    remove_attributes: Optional[shared.RemoveAttributesActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removeAttributes') }})
    select_attributes: Optional[shared.SelectAttributesActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectAttributes') }})
    

@dataclass_json
@dataclass
class RunPipelineActivityRequestBody:
    payloads: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payloads') }})
    pipeline_activity: RunPipelineActivityRequestBodyPipelineActivity = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineActivity') }})
    

@dataclass
class RunPipelineActivityRequest:
    headers: RunPipelineActivityHeaders = field()
    request: RunPipelineActivityRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RunPipelineActivityResponse:
    content_type: str = field()
    status_code: int = field()
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    run_pipeline_activity_response: Optional[shared.RunPipelineActivityResponse] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
