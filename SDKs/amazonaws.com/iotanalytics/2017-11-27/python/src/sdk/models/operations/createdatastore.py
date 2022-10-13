from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateDatastoreHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateDatastoreRequestBodyDatastorePartitions:
    partitions: Optional[List[shared.DatastorePartition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitions' }})
    

@dataclass_json
@dataclass
class CreateDatastoreRequestBodyDatastoreStorage:
    customer_managed_s3: Optional[shared.CustomerManagedDatastoreS3Storage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerManagedS3' }})
    iot_site_wise_multi_layer_storage: Optional[shared.DatastoreIotSiteWiseMultiLayerStorage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iotSiteWiseMultiLayerStorage' }})
    service_managed_s3: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceManagedS3' }})
    

@dataclass_json
@dataclass
class CreateDatastoreRequestBodyFileFormatConfiguration:
    json_configuration: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jsonConfiguration' }})
    parquet_configuration: Optional[shared.ParquetConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parquetConfiguration' }})
    

@dataclass_json
@dataclass
class CreateDatastoreRequestBodyRetentionPeriod:
    number_of_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfDays' }})
    unlimited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unlimited' }})
    

@dataclass_json
@dataclass
class CreateDatastoreRequestBody:
    datastore_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datastoreName' }})
    datastore_partitions: Optional[CreateDatastoreRequestBodyDatastorePartitions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datastorePartitions' }})
    datastore_storage: Optional[CreateDatastoreRequestBodyDatastoreStorage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datastoreStorage' }})
    file_format_configuration: Optional[CreateDatastoreRequestBodyFileFormatConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileFormatConfiguration' }})
    retention_period: Optional[CreateDatastoreRequestBodyRetentionPeriod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retentionPeriod' }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateDatastoreRequest:
    headers: CreateDatastoreHeaders = field(default=None)
    request: CreateDatastoreRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDatastoreResponse:
    content_type: str = field(default=None)
    create_datastore_response: Optional[shared.CreateDatastoreResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
