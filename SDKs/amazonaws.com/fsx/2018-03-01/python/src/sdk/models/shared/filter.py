from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import filtername_enum


@dataclass_json
@dataclass
class Filter:
    name: Optional[filtername_enum.FilterNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    
