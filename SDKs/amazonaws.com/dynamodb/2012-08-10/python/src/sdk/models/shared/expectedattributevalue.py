from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import attributevalue
from . import comparisonoperator_enum
from . import attributevalue


@dataclass_json
@dataclass
class ExpectedAttributeValue:
    attribute_value_list: Optional[List[attributevalue.AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeValueList' }})
    comparison_operator: Optional[comparisonoperator_enum.ComparisonOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComparisonOperator' }})
    exists: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Exists' }})
    value: Optional[attributevalue.AttributeValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
