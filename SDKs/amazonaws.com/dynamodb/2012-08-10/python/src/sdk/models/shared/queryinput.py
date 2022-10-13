from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import conditionaloperator_enum
from . import attributevalue
from . import attributevalue
from . import condition
from . import condition
from . import returnconsumedcapacity_enum
from . import select_enum


@dataclass_json
@dataclass
class QueryInput:
    attributes_to_get: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributesToGet' }})
    conditional_operator: Optional[conditionaloperator_enum.ConditionalOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConditionalOperator' }})
    consistent_read: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsistentRead' }})
    exclusive_start_key: Optional[dict[str, attributevalue.AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExclusiveStartKey' }})
    expression_attribute_names: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpressionAttributeNames' }})
    expression_attribute_values: Optional[dict[str, attributevalue.AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpressionAttributeValues' }})
    filter_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilterExpression' }})
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexName' }})
    key_condition_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyConditionExpression' }})
    key_conditions: Optional[dict[str, condition.Condition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyConditions' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    projection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectionExpression' }})
    query_filter: Optional[dict[str, condition.Condition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryFilter' }})
    return_consumed_capacity: Optional[returnconsumedcapacity_enum.ReturnConsumedCapacityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReturnConsumedCapacity' }})
    scan_index_forward: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScanIndexForward' }})
    select: Optional[select_enum.SelectEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Select' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
