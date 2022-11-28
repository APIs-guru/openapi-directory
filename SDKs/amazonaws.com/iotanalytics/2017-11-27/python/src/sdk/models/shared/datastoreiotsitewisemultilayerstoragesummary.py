from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DatastoreIotSiteWiseMultiLayerStorageSummary:
    r"""DatastoreIotSiteWiseMultiLayerStorageSummary
     Contains information about the data store that you manage, which stores data used by IoT SiteWise. 
    """
    
    customer_managed_s3_storage: Optional[IotSiteWiseCustomerManagedDatastoreS3StorageSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerManagedS3Storage') }})
    
