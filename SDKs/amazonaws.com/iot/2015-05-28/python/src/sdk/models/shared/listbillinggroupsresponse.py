from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import groupnameandarn


@dataclass_json
@dataclass
class ListBillingGroupsResponse:
    billing_groups: Optional[List[groupnameandarn.GroupNameAndArn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingGroups' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
