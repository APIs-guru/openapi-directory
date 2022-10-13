from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import conditionaloperator_enum
from . import expectedattributevalue
from . import attributevalue
from . import attributevalue
from . import returnconsumedcapacity_enum
from . import returnitemcollectionmetrics_enum
from . import returnvalue_enum


@dataclass_json
@dataclass
class PutItemInput:
    condition_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConditionExpression' }})
    conditional_operator: Optional[conditionaloperator_enum.ConditionalOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConditionalOperator' }})
    expected: Optional[dict[str, expectedattributevalue.ExpectedAttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Expected' }})
    expression_attribute_names: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpressionAttributeNames' }})
    expression_attribute_values: Optional[dict[str, attributevalue.AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpressionAttributeValues' }})
    item: dict[str, attributevalue.AttributeValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Item' }})
    return_consumed_capacity: Optional[returnconsumedcapacity_enum.ReturnConsumedCapacityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReturnConsumedCapacity' }})
    return_item_collection_metrics: Optional[returnitemcollectionmetrics_enum.ReturnItemCollectionMetricsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReturnItemCollectionMetrics' }})
    return_values: Optional[returnvalue_enum.ReturnValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReturnValues' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
