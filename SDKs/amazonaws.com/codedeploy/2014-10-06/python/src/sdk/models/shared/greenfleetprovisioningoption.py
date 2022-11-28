from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GreenFleetProvisioningOption:
    r"""GreenFleetProvisioningOption
    Information about the instances that belong to the replacement environment in a blue/green deployment.
    """
    
    action: Optional[GreenFleetProvisioningActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    
