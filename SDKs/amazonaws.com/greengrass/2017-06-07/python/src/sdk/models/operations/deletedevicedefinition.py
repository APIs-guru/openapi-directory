from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteDeviceDefinitionPathParams:
    device_definition_id: str = field(default=None, metadata={'path_param': { 'field_name': 'DeviceDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDeviceDefinitionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class DeleteDeviceDefinitionRequest:
    path_params: DeleteDeviceDefinitionPathParams = field(default=None)
    headers: DeleteDeviceDefinitionHeaders = field(default=None)
    

@dataclass
class DeleteDeviceDefinitionResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    delete_device_definition_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
