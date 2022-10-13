from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import namedquery


@dataclass_json
@dataclass
class GetNamedQueryOutput:
    named_query: Optional[namedquery.NamedQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NamedQuery' }})
    
