from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import sourceread


@dataclass_json
@dataclass
class SourceReadList:
    sources: List[sourceread.SourceRead] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    
