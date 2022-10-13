from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import listeventtypesfiltername_enum


@dataclass_json
@dataclass
class ListEventTypesFilter:
    name: listeventtypesfiltername_enum.ListEventTypesFilterNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
