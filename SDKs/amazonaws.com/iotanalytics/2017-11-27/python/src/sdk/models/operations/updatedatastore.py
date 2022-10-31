from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateDatastorePathParams:
    datastore_name: str = field(default=None, metadata={'path_param': { 'field_name': 'datastoreName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDatastoreHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateDatastoreRequestBodyDatastoreStorage:
    customer_managed_s3: Optional[shared.CustomerManagedDatastoreS3Storage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerManagedS3' }})
    iot_site_wise_multi_layer_storage: Optional[shared.DatastoreIotSiteWiseMultiLayerStorage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iotSiteWiseMultiLayerStorage' }})
    service_managed_s3: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceManagedS3' }})
    

@dataclass_json
@dataclass
class UpdateDatastoreRequestBodyFileFormatConfiguration:
    json_configuration: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jsonConfiguration' }})
    parquet_configuration: Optional[shared.ParquetConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parquetConfiguration' }})
    

@dataclass_json
@dataclass
class UpdateDatastoreRequestBodyRetentionPeriod:
    number_of_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfDays' }})
    unlimited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unlimited' }})
    

@dataclass_json
@dataclass
class UpdateDatastoreRequestBody:
    datastore_storage: Optional[UpdateDatastoreRequestBodyDatastoreStorage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datastoreStorage' }})
    file_format_configuration: Optional[UpdateDatastoreRequestBodyFileFormatConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileFormatConfiguration' }})
    retention_period: Optional[UpdateDatastoreRequestBodyRetentionPeriod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retentionPeriod' }})
    

@dataclass
class UpdateDatastoreRequest:
    path_params: UpdateDatastorePathParams = field(default=None)
    headers: UpdateDatastoreHeaders = field(default=None)
    request: UpdateDatastoreRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDatastoreResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
