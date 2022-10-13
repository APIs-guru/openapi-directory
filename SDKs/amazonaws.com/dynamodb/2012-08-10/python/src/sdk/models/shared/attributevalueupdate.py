from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import attributeaction_enum
from . import attributevalue


@dataclass_json
@dataclass
class AttributeValueUpdate:
    action: Optional[attributeaction_enum.AttributeActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    value: Optional[attributevalue.AttributeValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
