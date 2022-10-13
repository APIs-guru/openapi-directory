from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import attributevalue
from . import attributevalue
from . import returnvaluesonconditioncheckfailure_enum


@dataclass_json
@dataclass
class ConditionCheck:
    condition_expression: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConditionExpression' }})
    expression_attribute_names: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpressionAttributeNames' }})
    expression_attribute_values: Optional[dict[str, attributevalue.AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpressionAttributeValues' }})
    key: dict[str, attributevalue.AttributeValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    return_values_on_condition_check_failure: Optional[returnvaluesonconditioncheckfailure_enum.ReturnValuesOnConditionCheckFailureEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReturnValuesOnConditionCheckFailure' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
