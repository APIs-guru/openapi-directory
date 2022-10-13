from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteStorageVirtualMachineRequest:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    storage_virtual_machine_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageVirtualMachineId' }})
    
