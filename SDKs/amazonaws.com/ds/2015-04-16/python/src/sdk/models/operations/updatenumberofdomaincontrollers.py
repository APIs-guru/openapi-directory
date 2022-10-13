from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UpdateNumberOfDomainControllersXAmzTargetEnum(str, Enum):
    DIRECTORY_SERVICE_20150416_UPDATE_NUMBER_OF_DOMAIN_CONTROLLERS = "DirectoryService_20150416.UpdateNumberOfDomainControllers"


@dataclass
class UpdateNumberOfDomainControllersHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: UpdateNumberOfDomainControllersXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class UpdateNumberOfDomainControllersRequest:
    headers: UpdateNumberOfDomainControllersHeaders = field(default=None)
    request: shared.UpdateNumberOfDomainControllersRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNumberOfDomainControllersResponse:
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    directory_unavailable_exception: Optional[Any] = field(default=None)
    domain_controller_limit_exceeded_exception: Optional[Any] = field(default=None)
    entity_does_not_exist_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_operation_exception: Optional[Any] = field(default=None)
    update_number_of_domain_controllers_result: Optional[dict[str, Any]] = field(default=None)
    
