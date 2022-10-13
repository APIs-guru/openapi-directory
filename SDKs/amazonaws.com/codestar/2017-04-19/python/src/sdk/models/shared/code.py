from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import codedestination
from . import codesource


@dataclass_json
@dataclass
class Code:
    destination: codedestination.CodeDestination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    source: codesource.CodeSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
