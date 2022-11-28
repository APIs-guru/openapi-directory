from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CapacityProvider:
    r"""CapacityProvider
    The details of a capacity provider.
    """
    
    auto_scaling_group_provider: Optional[AutoScalingGroupProvider] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScalingGroupProvider') }})
    capacity_provider_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityProviderArn') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[CapacityProviderStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    update_status: Optional[CapacityProviderUpdateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateStatus') }})
    update_status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateStatusReason') }})
    
