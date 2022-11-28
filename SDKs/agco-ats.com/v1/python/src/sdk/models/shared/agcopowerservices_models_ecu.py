from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AgcoPowerServicesModelsEcuStateEnum(str, Enum):
    ACTIVE = "Active"
    INACTIVE = "Inactive"
    DAMAGED = "Damaged"


@dataclass_json
@dataclass
class AgcoPowerServicesModelsEcu:
    r"""AgcoPowerServicesModelsEcu
    An AGCO Power ECU
    """
    
    engine_serial_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineSerialNumber') }, 'form': { 'field_name': 'EngineSerialNumber' }})
    serial_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SerialNumber') }, 'form': { 'field_name': 'SerialNumber' }})
    state: AgcoPowerServicesModelsEcuStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }, 'form': { 'field_name': 'State' }})
    activation_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActivationCode') }, 'form': { 'field_name': 'ActivationCode' }})
    damaged_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DamagedDescription') }, 'form': { 'field_name': 'DamagedDescription' }})
    replaces_ecu_serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplacesECUSerialNumber') }, 'form': { 'field_name': 'ReplacesECUSerialNumber' }})
    
