from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Ec2Configuration:
    image_id_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageIdOverride' }})
    image_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageType' }})
    
