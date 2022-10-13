from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import expectedattributevalue
from . import key
from . import returnvalue_enum


@dataclass_json
@dataclass
class DeleteItemInput:
    expected: Optional[dict[str, expectedattributevalue.ExpectedAttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Expected' }})
    key: key.Key = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    return_values: Optional[returnvalue_enum.ReturnValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReturnValues' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
