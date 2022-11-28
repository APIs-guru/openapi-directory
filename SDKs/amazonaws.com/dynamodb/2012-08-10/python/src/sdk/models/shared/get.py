from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Get:
    r"""Get
    Specifies an item and related attribute values to retrieve in a <code>TransactGetItem</code> object.
    """
    
    key: dict[str, AttributeValue] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    expression_attribute_names: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpressionAttributeNames') }})
    projection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectionExpression') }})
    
