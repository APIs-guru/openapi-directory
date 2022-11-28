from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Ec2InstanceCounts:
    r"""Ec2InstanceCounts
    <p>Resource capacity settings. Fleet capacity is measured in EC2 instances. Pending and terminating counts are non-zero when the fleet capacity is adjusting to a scaling event or if access to resources is temporarily affected.</p> <p>EC2 instance counts are part of <a>FleetCapacity</a>.</p>
    """
    
    active: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ACTIVE') }})
    desired: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DESIRED') }})
    idle: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IDLE') }})
    maximum: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MAXIMUM') }})
    minimum: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MINIMUM') }})
    pending: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PENDING') }})
    terminating: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TERMINATING') }})
    
