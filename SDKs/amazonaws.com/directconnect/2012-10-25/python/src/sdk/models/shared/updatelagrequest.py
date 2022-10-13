from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateLagRequest:
    encryption_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionMode' }})
    lag_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lagId' }})
    lag_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lagName' }})
    minimum_links: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumLinks' }})
    
