from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import comparisonoperator_enum


@dataclass_json
@dataclass
class SimpleRuleEvaluation:
    input_property_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputPropertyValue' }})
    operator: Optional[comparisonoperator_enum.ComparisonOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    threshold_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thresholdValue' }})
    
