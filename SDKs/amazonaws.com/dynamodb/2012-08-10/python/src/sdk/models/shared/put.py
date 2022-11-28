from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Put:
    r"""Put
    Represents a request to perform a <code>PutItem</code> operation.
    """
    
    item: dict[str, AttributeValue] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Item') }})
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    condition_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConditionExpression') }})
    expression_attribute_names: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpressionAttributeNames') }})
    expression_attribute_values: Optional[dict[str, AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpressionAttributeValues') }})
    return_values_on_condition_check_failure: Optional[ReturnValuesOnConditionCheckFailureEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReturnValuesOnConditionCheckFailure') }})
    
