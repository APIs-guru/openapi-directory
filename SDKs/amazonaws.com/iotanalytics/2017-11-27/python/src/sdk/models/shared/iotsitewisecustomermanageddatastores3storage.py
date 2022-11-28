from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IotSiteWiseCustomerManagedDatastoreS3Storage:
    r"""IotSiteWiseCustomerManagedDatastoreS3Storage
     Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created. 
    """
    
    bucket: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket') }})
    key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyPrefix') }})
    
