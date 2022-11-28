from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeBillingGroupResponse:
    billing_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingGroupArn') }})
    billing_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingGroupId') }})
    billing_group_metadata: Optional[BillingGroupMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingGroupMetadata') }})
    billing_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingGroupName') }})
    billing_group_properties: Optional[BillingGroupProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingGroupProperties') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
