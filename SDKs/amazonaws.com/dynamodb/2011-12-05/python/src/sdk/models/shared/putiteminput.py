from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import expectedattributevalue
from . import attributevalue
from . import returnvalue_enum


@dataclass_json
@dataclass
class PutItemInput:
    expected: Optional[dict[str, expectedattributevalue.ExpectedAttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Expected' }})
    item: dict[str, attributevalue.AttributeValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Item' }})
    return_values: Optional[returnvalue_enum.ReturnValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReturnValues' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
