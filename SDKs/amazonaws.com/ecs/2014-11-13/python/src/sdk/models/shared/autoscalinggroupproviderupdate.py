from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutoScalingGroupProviderUpdate:
    r"""AutoScalingGroupProviderUpdate
    The details of the Auto Scaling group capacity provider to update.
    """
    
    managed_scaling: Optional[ManagedScaling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedScaling') }})
    managed_termination_protection: Optional[ManagedTerminationProtectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedTerminationProtection') }})
    
