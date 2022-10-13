from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import storagevirtualmachinefilter


@dataclass_json
@dataclass
class DescribeStorageVirtualMachinesRequest:
    filters: Optional[List[storagevirtualmachinefilter.StorageVirtualMachineFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    storage_virtual_machine_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageVirtualMachineIds' }})
    
