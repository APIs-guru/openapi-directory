from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AgcoPowerServicesModelsEcuStateEnum(str, Enum):
    ACTIVE = "Active"
    INACTIVE = "Inactive"
    DAMAGED = "Damaged"


@dataclass_json
@dataclass
class AgcoPowerServicesModelsEcu:
    activation_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActivationCode' }, 'form': { 'field_name': 'ActivationCode' }})
    damaged_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DamagedDescription' }, 'form': { 'field_name': 'DamagedDescription' }})
    engine_serial_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineSerialNumber' }, 'form': { 'field_name': 'EngineSerialNumber' }})
    replaces_ecu_serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplacesECUSerialNumber' }, 'form': { 'field_name': 'ReplacesECUSerialNumber' }})
    serial_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SerialNumber' }, 'form': { 'field_name': 'SerialNumber' }})
    state: AgcoPowerServicesModelsEcuStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }, 'form': { 'field_name': 'State' }})
    
