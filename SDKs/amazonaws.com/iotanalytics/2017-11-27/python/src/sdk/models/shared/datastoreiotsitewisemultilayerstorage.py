from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DatastoreIotSiteWiseMultiLayerStorage:
    r"""DatastoreIotSiteWiseMultiLayerStorage
     Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created. 
    """
    
    customer_managed_s3_storage: IotSiteWiseCustomerManagedDatastoreS3Storage = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerManagedS3Storage') }})
    
