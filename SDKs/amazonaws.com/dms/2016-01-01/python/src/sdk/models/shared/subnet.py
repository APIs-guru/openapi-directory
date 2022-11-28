from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Subnet:
    r"""Subnet
    In response to a request by the <code>DescribeReplicationSubnetGroups</code> operation, this object identifies a subnet by its given Availability Zone, subnet identifier, and status.
    """
    
    subnet_availability_zone: Optional[AvailabilityZone] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetAvailabilityZone') }})
    subnet_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIdentifier') }})
    subnet_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetStatus') }})
    
