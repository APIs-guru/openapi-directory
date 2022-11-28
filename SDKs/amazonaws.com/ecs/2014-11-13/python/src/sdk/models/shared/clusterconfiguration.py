from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClusterConfiguration:
    r"""ClusterConfiguration
    The execute command configuration for the cluster.
    """
    
    execute_command_configuration: Optional[ExecuteCommandConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executeCommandConfiguration') }})
    
