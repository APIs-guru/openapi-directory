from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScanInput:
    r"""ScanInput
    Represents the input of a <code>Scan</code> operation.
    """
    
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    attributes_to_get: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributesToGet') }})
    conditional_operator: Optional[ConditionalOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConditionalOperator') }})
    consistent_read: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsistentRead') }})
    exclusive_start_key: Optional[dict[str, AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExclusiveStartKey') }})
    expression_attribute_names: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpressionAttributeNames') }})
    expression_attribute_values: Optional[dict[str, AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpressionAttributeValues') }})
    filter_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterExpression') }})
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexName') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    projection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectionExpression') }})
    return_consumed_capacity: Optional[ReturnConsumedCapacityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReturnConsumedCapacity') }})
    scan_filter: Optional[dict[str, Condition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScanFilter') }})
    segment: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Segment') }})
    select: Optional[SelectEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Select') }})
    total_segments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalSegments') }})
    
