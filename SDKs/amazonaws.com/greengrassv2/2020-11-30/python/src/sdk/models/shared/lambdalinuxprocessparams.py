from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import lambdacontainerparams
from . import lambdaisolationmode_enum


@dataclass_json
@dataclass
class LambdaLinuxProcessParams:
    container_params: Optional[lambdacontainerparams.LambdaContainerParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerParams' }})
    isolation_mode: Optional[lambdaisolationmode_enum.LambdaIsolationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isolationMode' }})
    
