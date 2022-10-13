from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import linkattributeaction
from . import attributekey


@dataclass_json
@dataclass
class LinkAttributeUpdate:
    attribute_action: Optional[linkattributeaction.LinkAttributeAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeAction' }})
    attribute_key: Optional[attributekey.AttributeKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeKey' }})
    
