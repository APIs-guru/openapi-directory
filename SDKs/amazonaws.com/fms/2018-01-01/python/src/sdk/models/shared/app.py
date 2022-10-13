from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class App:
    app_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppName' }})
    port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Port' }})
    protocol: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Protocol' }})
    
