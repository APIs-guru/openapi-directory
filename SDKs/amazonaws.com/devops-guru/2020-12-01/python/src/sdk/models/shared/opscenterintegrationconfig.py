from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OpsCenterIntegrationConfig:
    r"""OpsCenterIntegrationConfig
     Information about whether DevOps Guru is configured to create an OpsItem in AWS Systems Manager OpsCenter for each created insight. 
    """
    
    opt_in_status: Optional[OptInStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OptInStatus') }})
    
