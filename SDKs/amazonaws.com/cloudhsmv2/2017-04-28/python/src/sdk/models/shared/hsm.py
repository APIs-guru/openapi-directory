from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import hsmstate_enum


@dataclass_json
@dataclass
class Hsm:
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZone' }})
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterId' }})
    eni_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EniId' }})
    eni_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EniIp' }})
    hsm_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HsmId' }})
    state: Optional[hsmstate_enum.HsmStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    state_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateMessage' }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetId' }})
    
