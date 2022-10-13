from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import updateactiontype_enum
from . import typedattributevalue


@dataclass_json
@dataclass
class ObjectAttributeAction:
    object_attribute_action_type: Optional[updateactiontype_enum.UpdateActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectAttributeActionType' }})
    object_attribute_update_value: Optional[typedattributevalue.TypedAttributeValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectAttributeUpdateValue' }})
    
