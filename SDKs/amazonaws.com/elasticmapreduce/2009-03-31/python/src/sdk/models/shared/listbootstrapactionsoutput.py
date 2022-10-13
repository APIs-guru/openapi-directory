from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import command


@dataclass_json
@dataclass
class ListBootstrapActionsOutput:
    bootstrap_actions: Optional[List[command.Command]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BootstrapActions' }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    
