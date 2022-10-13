from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deviceattribute_enum
from . import ruleoperator_enum


@dataclass_json
@dataclass
class Rule:
    attribute: Optional[deviceattribute_enum.DeviceAttributeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attribute' }})
    operator: Optional[ruleoperator_enum.RuleOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
