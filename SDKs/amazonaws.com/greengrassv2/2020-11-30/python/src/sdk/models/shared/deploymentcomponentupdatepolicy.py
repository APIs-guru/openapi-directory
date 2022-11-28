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
class DeploymentComponentUpdatePolicy:
    r"""DeploymentComponentUpdatePolicy
    <p>Contains information about a deployment's policy that defines when components are safe to update.</p> <p>Each component on a device can report whether or not it's ready to update. After a component and its dependencies are ready, they can apply the update in the deployment. You can configure whether or not the deployment notifies components of an update and waits for a response. You specify the amount of time each component has to respond to the update notification.</p>
    """
    
    action: Optional[DeploymentComponentUpdatePolicyActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutInSeconds') }})
    
