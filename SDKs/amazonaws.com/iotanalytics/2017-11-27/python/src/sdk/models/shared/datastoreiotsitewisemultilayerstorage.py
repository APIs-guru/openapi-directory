from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import iotsitewisecustomermanageddatastores3storage


@dataclass_json
@dataclass
class DatastoreIotSiteWiseMultiLayerStorage:
    customer_managed_s3_storage: iotsitewisecustomermanageddatastores3storage.IotSiteWiseCustomerManagedDatastoreS3Storage = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerManagedS3Storage' }})
    
