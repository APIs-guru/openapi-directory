from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import filtertype_enum


@dataclass_json
@dataclass
class FilterRule:
    filter_type: Optional[filtertype_enum.FilterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilterType' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
