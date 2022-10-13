from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import storagevirtualmachine


@dataclass_json
@dataclass
class DescribeStorageVirtualMachinesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    storage_virtual_machines: Optional[List[storagevirtualmachine.StorageVirtualMachine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageVirtualMachines' }})
    
