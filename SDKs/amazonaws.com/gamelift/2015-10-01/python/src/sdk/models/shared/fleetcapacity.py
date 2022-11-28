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
class FleetCapacity:
    r"""FleetCapacity
    <p>Current resource capacity settings in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region. </p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetCapacity</a> | <a>DescribeFleetLocationCapacity</a> | <a>UpdateFleetCapacity</a> </p>
    """
    
    fleet_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetArn') }})
    fleet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    instance_counts: Optional[Ec2InstanceCounts] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceCounts') }})
    instance_type: Optional[Ec2InstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    
