from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import addon


@dataclass_json
@dataclass
class DescribeAddonResponse:
    addon: Optional[addon.Addon] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addon' }})
    
