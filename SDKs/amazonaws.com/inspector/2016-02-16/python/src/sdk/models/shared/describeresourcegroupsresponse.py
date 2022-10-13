from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import faileditemdetails
from . import resourcegroup


@dataclass_json
@dataclass
class DescribeResourceGroupsResponse:
    failed_items: dict[str, faileditemdetails.FailedItemDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedItems' }})
    resource_groups: List[resourcegroup.ResourceGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceGroups' }})
    
