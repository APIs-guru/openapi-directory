from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PrivateConnectionProvisioningState:
    r"""PrivateConnectionProvisioningState
     Specifies the private connection provisioning state. 
    """
    
    failure_cause: Optional[PrivateConnectionProvisioningFailureCauseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureCause') }})
    failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureMessage') }})
    status: Optional[PrivateConnectionProvisioningStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
