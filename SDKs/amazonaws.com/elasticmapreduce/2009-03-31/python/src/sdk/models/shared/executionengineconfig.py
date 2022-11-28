from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExecutionEngineConfig:
    r"""ExecutionEngineConfig
    Specifies the execution engine (cluster) to run the notebook and perform the notebook execution, for example, an EMR cluster.
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    master_instance_security_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MasterInstanceSecurityGroupId') }})
    type: Optional[ExecutionEngineTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
