from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import selector


@dataclass_json
@dataclass
class Query:
    selectors: Optional[List[selector.Selector]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectors' }})
    
