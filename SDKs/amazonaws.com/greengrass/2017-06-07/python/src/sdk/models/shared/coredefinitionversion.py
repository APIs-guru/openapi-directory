from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import core


@dataclass_json
@dataclass
class CoreDefinitionVersion:
    cores: Optional[List[core.Core]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Cores' }})
    
