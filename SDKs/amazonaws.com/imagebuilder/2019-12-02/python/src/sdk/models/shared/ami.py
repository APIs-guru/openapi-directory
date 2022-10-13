from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import imagestate


@dataclass_json
@dataclass
class Ami:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    state: Optional[imagestate.ImageState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
