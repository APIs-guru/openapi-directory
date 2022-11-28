from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class KeysAndAttributes:
    r"""KeysAndAttributes
    <p>Represents a set of primary keys and, for each key, the attributes to retrieve from the table.</p> <p>For each primary key, you must provide <i>all</i> of the key attributes. For example, with a simple primary key, you only need to provide the partition key. For a composite primary key, you must provide <i>both</i> the partition key and the sort key.</p>
    """
    
    keys: List[dict[str, AttributeValue]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Keys') }})
    attributes_to_get: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributesToGet') }})
    consistent_read: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsistentRead') }})
    expression_attribute_names: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpressionAttributeNames') }})
    projection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectionExpression') }})
    
