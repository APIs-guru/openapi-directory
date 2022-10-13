from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import storagevirtualmachinelifecycle_enum


@dataclass_json
@dataclass
class DeleteStorageVirtualMachineResponse:
    lifecycle: Optional[storagevirtualmachinelifecycle_enum.StorageVirtualMachineLifecycleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Lifecycle' }})
    storage_virtual_machine_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageVirtualMachineId' }})
    
