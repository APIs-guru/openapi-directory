from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keyvalue


@dataclass_json
@dataclass
class HadoopJarStepConfig:
    args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Args' }})
    jar: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Jar' }})
    main_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MainClass' }})
    properties: Optional[List[keyvalue.KeyValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Properties' }})
    
