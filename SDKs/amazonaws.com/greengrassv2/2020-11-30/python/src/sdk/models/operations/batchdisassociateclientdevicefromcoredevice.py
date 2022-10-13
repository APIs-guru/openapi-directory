from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class BatchDisassociateClientDeviceFromCoreDevicePathParams:
    core_device_thing_name: str = field(default=None, metadata={'path_param': { 'field_name': 'coreDeviceThingName', 'style': 'simple', 'explode': False }})
    

@dataclass
class BatchDisassociateClientDeviceFromCoreDeviceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class BatchDisassociateClientDeviceFromCoreDeviceRequestBody:
    entries: Optional[List[shared.DisassociateClientDeviceFromCoreDeviceEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    

@dataclass
class BatchDisassociateClientDeviceFromCoreDeviceRequest:
    path_params: BatchDisassociateClientDeviceFromCoreDevicePathParams = field(default=None)
    headers: BatchDisassociateClientDeviceFromCoreDeviceHeaders = field(default=None)
    request: BatchDisassociateClientDeviceFromCoreDeviceRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchDisassociateClientDeviceFromCoreDeviceResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    batch_disassociate_client_device_from_core_device_response: Optional[shared.BatchDisassociateClientDeviceFromCoreDeviceResponse] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
