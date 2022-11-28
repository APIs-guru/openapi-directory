from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExpectedAttributeValue:
    r"""ExpectedAttributeValue
    <p>Represents a condition to be compared with an attribute value. This condition can be used with <code>DeleteItem</code>, <code>PutItem</code>, or <code>UpdateItem</code> operations; if the comparison evaluates to true, the operation succeeds; if not, the operation fails. You can use <code>ExpectedAttributeValue</code> in one of two different ways:</p> <ul> <li> <p>Use <code>AttributeValueList</code> to specify one or more values to compare against an attribute. Use <code>ComparisonOperator</code> to specify how you want to perform the comparison. If the comparison evaluates to true, then the conditional operation succeeds.</p> </li> <li> <p>Use <code>Value</code> to specify a value that DynamoDB will compare against an attribute. If the values match, then <code>ExpectedAttributeValue</code> evaluates to true and the conditional operation succeeds. Optionally, you can also set <code>Exists</code> to false, indicating that you <i>do not</i> expect to find the attribute value in the table. In this case, the conditional operation succeeds only if the comparison evaluates to false.</p> </li> </ul> <p> <code>Value</code> and <code>Exists</code> are incompatible with <code>AttributeValueList</code> and <code>ComparisonOperator</code>. Note that if you use both sets of parameters at once, DynamoDB will return a <code>ValidationException</code> exception.</p>
    """
    
    attribute_value_list: Optional[List[AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeValueList') }})
    comparison_operator: Optional[ComparisonOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComparisonOperator') }})
    exists: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Exists') }})
    value: Optional[AttributeValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
