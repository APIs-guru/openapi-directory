from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import crossregioncopyaction


@dataclass_json
@dataclass
class Action:
    cross_region_copy: List[crossregioncopyaction.CrossRegionCopyAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CrossRegionCopy' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
