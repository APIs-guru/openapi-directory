from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import logdriver_enum
from . import secret


@dataclass_json
@dataclass
class LogConfiguration:
    log_driver: logdriver_enum.LogDriverEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logDriver' }})
    options: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    secret_options: Optional[List[secret.Secret]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretOptions' }})
    
