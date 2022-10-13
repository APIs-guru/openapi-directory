from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import configuration


@dataclass_json
@dataclass
class Configuration:
    classification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Classification' }})
    configurations: Optional[List[configuration.Configuration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Configurations' }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Properties' }})
    
