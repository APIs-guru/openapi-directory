from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OcspConfiguration:
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    ocsp_custom_cname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OcspCustomCname' }})
    
