from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateBillingGroupResponse:
    billing_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingGroupArn' }})
    billing_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingGroupId' }})
    billing_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingGroupName' }})
    
