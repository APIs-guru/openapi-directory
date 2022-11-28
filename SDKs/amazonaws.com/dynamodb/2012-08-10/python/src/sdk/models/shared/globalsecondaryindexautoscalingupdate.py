from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GlobalSecondaryIndexAutoScalingUpdate:
    r"""GlobalSecondaryIndexAutoScalingUpdate
    Represents the auto scaling settings of a global secondary index for a global table that will be modified.
    """
    
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexName') }})
    provisioned_write_capacity_auto_scaling_update: Optional[AutoScalingSettingsUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedWriteCapacityAutoScalingUpdate') }})
    
