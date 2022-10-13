from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import executecommandconfiguration


@dataclass_json
@dataclass
class ClusterConfiguration:
    execute_command_configuration: Optional[executecommandconfiguration.ExecuteCommandConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executeCommandConfiguration' }})
    
