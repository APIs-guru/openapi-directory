from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import executecommandlogconfiguration
from . import executecommandlogging_enum


@dataclass_json
@dataclass
class ExecuteCommandConfiguration:
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyId' }})
    log_configuration: Optional[executecommandlogconfiguration.ExecuteCommandLogConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logConfiguration' }})
    logging: Optional[executecommandlogging_enum.ExecuteCommandLoggingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logging' }})
    
