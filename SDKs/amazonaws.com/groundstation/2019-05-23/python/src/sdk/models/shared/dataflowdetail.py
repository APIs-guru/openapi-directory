from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import destination
from . import source


@dataclass_json
@dataclass
class DataflowDetail:
    destination: Optional[destination.Destination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    source: Optional[source.Source] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
