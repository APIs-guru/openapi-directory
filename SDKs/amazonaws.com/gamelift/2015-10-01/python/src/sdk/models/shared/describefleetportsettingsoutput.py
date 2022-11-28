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
class DescribeFleetPortSettingsOutput:
    r"""DescribeFleetPortSettingsOutput
    Represents the returned data in response to a request operation.
    """
    
    fleet_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetArn') }})
    fleet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    inbound_permissions: Optional[List[IPPermission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InboundPermissions') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    update_status: Optional[LocationUpdateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateStatus') }})
    
