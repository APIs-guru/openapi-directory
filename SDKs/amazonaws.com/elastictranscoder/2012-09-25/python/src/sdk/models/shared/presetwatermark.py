from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PresetWatermark:
    horizontal_align: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HorizontalAlign' }})
    horizontal_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HorizontalOffset' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    max_height: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxHeight' }})
    max_width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxWidth' }})
    opacity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Opacity' }})
    sizing_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SizingPolicy' }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Target' }})
    vertical_align: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VerticalAlign' }})
    vertical_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VerticalOffset' }})
    
