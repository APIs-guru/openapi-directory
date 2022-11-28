from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CustomerManagedDatastoreS3Storage:
    r"""CustomerManagedDatastoreS3Storage
    S3-customer-managed; When you choose customer-managed storage, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of Amazon S3 storage after your data store is created. 
    """
    
    bucket: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyPrefix') }})
    
