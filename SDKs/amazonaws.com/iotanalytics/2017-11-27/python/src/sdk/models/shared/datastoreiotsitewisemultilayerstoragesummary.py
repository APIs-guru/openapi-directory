from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import iotsitewisecustomermanageddatastores3storagesummary


@dataclass_json
@dataclass
class DatastoreIotSiteWiseMultiLayerStorageSummary:
    customer_managed_s3_storage: Optional[iotsitewisecustomermanageddatastores3storagesummary.IotSiteWiseCustomerManagedDatastoreS3StorageSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerManagedS3Storage' }})
    
