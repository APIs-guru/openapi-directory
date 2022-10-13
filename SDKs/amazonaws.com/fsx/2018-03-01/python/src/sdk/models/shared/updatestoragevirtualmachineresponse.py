from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import storagevirtualmachine


@dataclass_json
@dataclass
class UpdateStorageVirtualMachineResponse:
    storage_virtual_machine: Optional[storagevirtualmachine.StorageVirtualMachine] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageVirtualMachine' }})
    
