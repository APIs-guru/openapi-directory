from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutStorageConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutStorageConfigurationRequestBodyMultiLayerStorage:
    customer_managed_s3_storage: Optional[shared.CustomerManagedS3Storage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerManagedS3Storage' }})
    
class PutStorageConfigurationRequestBodyStorageTypeEnum(str, Enum):
    SITEWISE_DEFAULT_STORAGE = "SITEWISE_DEFAULT_STORAGE"
    MULTI_LAYER_STORAGE = "MULTI_LAYER_STORAGE"


@dataclass_json
@dataclass
class PutStorageConfigurationRequestBody:
    multi_layer_storage: Optional[PutStorageConfigurationRequestBodyMultiLayerStorage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multiLayerStorage' }})
    storage_type: PutStorageConfigurationRequestBodyStorageTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageType' }})
    

@dataclass
class PutStorageConfigurationRequest:
    headers: PutStorageConfigurationHeaders = field(default=None)
    request: PutStorageConfigurationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutStorageConfigurationResponse:
    conflicting_operation_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    put_storage_configuration_response: Optional[shared.PutStorageConfigurationResponse] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
