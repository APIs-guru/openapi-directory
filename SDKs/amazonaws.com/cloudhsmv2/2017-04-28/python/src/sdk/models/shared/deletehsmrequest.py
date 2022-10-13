from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteHsmRequest:
    cluster_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterId' }})
    eni_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EniId' }})
    eni_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EniIp' }})
    hsm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HsmId' }})
    
