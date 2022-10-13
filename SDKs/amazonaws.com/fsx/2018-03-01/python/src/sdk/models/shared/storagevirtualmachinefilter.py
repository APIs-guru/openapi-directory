from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import storagevirtualmachinefiltername_enum


@dataclass_json
@dataclass
class StorageVirtualMachineFilter:
    name: Optional[storagevirtualmachinefiltername_enum.StorageVirtualMachineFilterNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    
