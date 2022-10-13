from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import attributevalue


@dataclass_json
@dataclass
class Get:
    expression_attribute_names: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpressionAttributeNames' }})
    key: dict[str, attributevalue.AttributeValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    projection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectionExpression' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
