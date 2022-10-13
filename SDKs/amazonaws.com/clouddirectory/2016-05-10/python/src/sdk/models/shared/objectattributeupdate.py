from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import objectattributeaction
from . import attributekey


@dataclass_json
@dataclass
class ObjectAttributeUpdate:
    object_attribute_action: Optional[objectattributeaction.ObjectAttributeAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectAttributeAction' }})
    object_attribute_key: Optional[attributekey.AttributeKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectAttributeKey' }})
    
