from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import functiondefaultconfig
from . import function


@dataclass_json
@dataclass
class FunctionDefinitionVersion:
    default_config: Optional[functiondefaultconfig.FunctionDefaultConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultConfig' }})
    functions: Optional[List[function.Function]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Functions' }})
    
