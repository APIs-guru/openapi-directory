from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DatastoreStorage:
    r"""DatastoreStorage
    Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created. 
    """
    
    customer_managed_s3: Optional[CustomerManagedDatastoreS3Storage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerManagedS3') }})
    iot_site_wise_multi_layer_storage: Optional[DatastoreIotSiteWiseMultiLayerStorage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotSiteWiseMultiLayerStorage') }})
    service_managed_s3: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceManagedS3') }})
    
