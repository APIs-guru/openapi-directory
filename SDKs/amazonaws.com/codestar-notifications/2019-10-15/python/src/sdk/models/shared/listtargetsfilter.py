from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import listtargetsfiltername_enum


@dataclass_json
@dataclass
class ListTargetsFilter:
    name: listtargetsfiltername_enum.ListTargetsFilterNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
