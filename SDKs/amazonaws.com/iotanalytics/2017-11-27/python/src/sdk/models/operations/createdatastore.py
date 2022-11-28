from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateDatastoreHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateDatastoreRequestBodyDatastorePartitions:
    r"""CreateDatastoreRequestBodyDatastorePartitions
     Contains information about the partition dimensions in a data store. 
    """
    
    partitions: Optional[List[shared.DatastorePartition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitions') }})
    

@dataclass_json
@dataclass
class CreateDatastoreRequestBodyDatastoreStorage:
    r"""CreateDatastoreRequestBodyDatastoreStorage
    Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created. 
    """
    
    customer_managed_s3: Optional[shared.CustomerManagedDatastoreS3Storage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerManagedS3') }})
    iot_site_wise_multi_layer_storage: Optional[shared.DatastoreIotSiteWiseMultiLayerStorage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotSiteWiseMultiLayerStorage') }})
    service_managed_s3: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceManagedS3') }})
    

@dataclass_json
@dataclass
class CreateDatastoreRequestBodyFileFormatConfiguration:
    r"""CreateDatastoreRequestBodyFileFormatConfiguration
    <p>Contains the configuration information of file formats. IoT Analytics data stores support JSON and <a href=\"https://parquet.apache.org/\">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can't change the file format after you create the data store.</p>
    """
    
    json_configuration: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonConfiguration') }})
    parquet_configuration: Optional[shared.ParquetConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parquetConfiguration') }})
    

@dataclass_json
@dataclass
class CreateDatastoreRequestBodyRetentionPeriod:
    r"""CreateDatastoreRequestBodyRetentionPeriod
    How long, in days, message data is kept.
    """
    
    number_of_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfDays') }})
    unlimited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unlimited') }})
    

@dataclass_json
@dataclass
class CreateDatastoreRequestBody:
    datastore_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datastoreName') }})
    datastore_partitions: Optional[CreateDatastoreRequestBodyDatastorePartitions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datastorePartitions') }})
    datastore_storage: Optional[CreateDatastoreRequestBodyDatastoreStorage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datastoreStorage') }})
    file_format_configuration: Optional[CreateDatastoreRequestBodyFileFormatConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileFormatConfiguration') }})
    retention_period: Optional[CreateDatastoreRequestBodyRetentionPeriod] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retentionPeriod') }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateDatastoreRequest:
    headers: CreateDatastoreHeaders = field()
    request: CreateDatastoreRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDatastoreResponse:
    content_type: str = field()
    status_code: int = field()
    create_datastore_response: Optional[shared.CreateDatastoreResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
