from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import devicefilterattribute_enum
from . import ruleoperator_enum


@dataclass_json
@dataclass
class DeviceFilter:
    attribute: devicefilterattribute_enum.DeviceFilterAttributeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attribute' }})
    operator: ruleoperator_enum.RuleOperatorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    values: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
