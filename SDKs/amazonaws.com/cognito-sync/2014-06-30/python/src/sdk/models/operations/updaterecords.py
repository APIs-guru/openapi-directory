from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateRecordsPathParams:
    dataset_name: str = field(metadata={'path_param': { 'field_name': 'DatasetName', 'style': 'simple', 'explode': False }})
    identity_id: str = field(metadata={'path_param': { 'field_name': 'IdentityId', 'style': 'simple', 'explode': False }})
    identity_pool_id: str = field(metadata={'path_param': { 'field_name': 'IdentityPoolId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRecordsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_client_context: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-amz-Client-Context', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateRecordsRequestBody:
    sync_session_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SyncSessionToken') }})
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceId') }})
    record_patches: Optional[List[shared.RecordPatch]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordPatches') }})
    

@dataclass
class UpdateRecordsRequest:
    headers: UpdateRecordsHeaders = field()
    path_params: UpdateRecordsPathParams = field()
    request: UpdateRecordsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateRecordsResponse:
    content_type: str = field()
    status_code: int = field()
    internal_error_exception: Optional[Any] = field(default=None)
    invalid_lambda_function_output_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    lambda_throttled_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_authorized_exception: Optional[Any] = field(default=None)
    resource_conflict_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_records_response: Optional[shared.UpdateRecordsResponse] = field(default=None)
    
