from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import pathelement
from . import span


@dataclass_json
@dataclass
class Location:
    path: List[pathelement.PathElement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    span: span.Span = field(default=None, metadata={'dataclasses_json': { 'field_name': 'span' }})
    
