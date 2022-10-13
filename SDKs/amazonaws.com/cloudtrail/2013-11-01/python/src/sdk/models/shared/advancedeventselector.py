from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import advancedfieldselector


@dataclass_json
@dataclass
class AdvancedEventSelector:
    field_selectors: List[advancedfieldselector.AdvancedFieldSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FieldSelectors' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
