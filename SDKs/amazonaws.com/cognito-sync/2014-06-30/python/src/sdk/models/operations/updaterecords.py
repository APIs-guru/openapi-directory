from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateRecordsPathParams:
    dataset_name: str = field(default=None, metadata={'path_param': { 'field_name': 'DatasetName', 'style': 'simple', 'explode': False }})
    identity_id: str = field(default=None, metadata={'path_param': { 'field_name': 'IdentityId', 'style': 'simple', 'explode': False }})
    identity_pool_id: str = field(default=None, metadata={'path_param': { 'field_name': 'IdentityPoolId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRecordsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_client_context: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-amz-Client-Context' }})
    

@dataclass_json
@dataclass
class UpdateRecordsRequestBody:
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceId' }})
    record_patches: Optional[List[shared.RecordPatch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordPatches' }})
    sync_session_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyncSessionToken' }})
    

@dataclass
class UpdateRecordsRequest:
    path_params: UpdateRecordsPathParams = field(default=None)
    headers: UpdateRecordsHeaders = field(default=None)
    request: UpdateRecordsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateRecordsResponse:
    content_type: str = field(default=None)
    internal_error_exception: Optional[Any] = field(default=None)
    invalid_lambda_function_output_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    lambda_throttled_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_authorized_exception: Optional[Any] = field(default=None)
    resource_conflict_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_records_response: Optional[shared.UpdateRecordsResponse] = field(default=None)
    
