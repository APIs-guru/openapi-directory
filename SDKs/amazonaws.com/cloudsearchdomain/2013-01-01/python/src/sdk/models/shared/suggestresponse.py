from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import suggeststatus
from . import suggestmodel


@dataclass_json
@dataclass
class SuggestResponse:
    status: Optional[suggeststatus.SuggestStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    suggest: Optional[suggestmodel.SuggestModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggest' }})
    
