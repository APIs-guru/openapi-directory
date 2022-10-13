from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attributekeyandvalue


@dataclass_json
@dataclass
class GetLinkAttributesResponse:
    attributes: Optional[List[attributekeyandvalue.AttributeKeyAndValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    
