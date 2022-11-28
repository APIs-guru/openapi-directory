from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DatastoreStorageSummary:
    r"""DatastoreStorageSummary
    Contains information about your data store.
    """
    
    customer_managed_s3: Optional[CustomerManagedDatastoreS3StorageSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerManagedS3') }})
    iot_site_wise_multi_layer_storage: Optional[DatastoreIotSiteWiseMultiLayerStorageSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotSiteWiseMultiLayerStorage') }})
    service_managed_s3: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceManagedS3') }})
    
