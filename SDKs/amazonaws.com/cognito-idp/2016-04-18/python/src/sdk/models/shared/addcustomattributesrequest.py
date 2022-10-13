from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import schemaattributetype


@dataclass_json
@dataclass
class AddCustomAttributesRequest:
    custom_attributes: List[schemaattributetype.SchemaAttributeType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomAttributes' }})
    user_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    
