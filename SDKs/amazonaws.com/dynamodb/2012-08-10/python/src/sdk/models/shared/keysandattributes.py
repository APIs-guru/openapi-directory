from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attributevalue


@dataclass_json
@dataclass
class KeysAndAttributes:
    attributes_to_get: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributesToGet' }})
    consistent_read: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsistentRead' }})
    expression_attribute_names: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpressionAttributeNames' }})
    keys: List[dict[str, attributevalue.AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Keys' }})
    projection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectionExpression' }})
    
