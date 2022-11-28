from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteItemInput:
    r"""DeleteItemInput
    Represents the input of a <code>DeleteItem</code> operation.
    """
    
    key: dict[str, AttributeValue] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    condition_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConditionExpression') }})
    conditional_operator: Optional[ConditionalOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConditionalOperator') }})
    expected: Optional[dict[str, ExpectedAttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Expected') }})
    expression_attribute_names: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpressionAttributeNames') }})
    expression_attribute_values: Optional[dict[str, AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpressionAttributeValues') }})
    return_consumed_capacity: Optional[ReturnConsumedCapacityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReturnConsumedCapacity') }})
    return_item_collection_metrics: Optional[ReturnItemCollectionMetricsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReturnItemCollectionMetrics') }})
    return_values: Optional[ReturnValueEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReturnValues') }})
    
