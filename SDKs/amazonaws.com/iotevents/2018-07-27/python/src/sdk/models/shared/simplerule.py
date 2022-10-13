from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import comparisonoperator_enum


@dataclass_json
@dataclass
class SimpleRule:
    comparison_operator: comparisonoperator_enum.ComparisonOperatorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparisonOperator' }})
    input_property: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputProperty' }})
    threshold: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'threshold' }})
    
