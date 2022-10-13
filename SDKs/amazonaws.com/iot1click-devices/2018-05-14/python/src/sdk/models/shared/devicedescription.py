from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeviceDescription:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceId' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    remaining_life: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemainingLife' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
