from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import attributevalue
from . import comparisonoperator_enum


@dataclass_json
@dataclass
class Condition:
    attribute_value_list: Optional[List[attributevalue.AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeValueList' }})
    comparison_operator: comparisonoperator_enum.ComparisonOperatorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComparisonOperator' }})
    
