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
class AdminUpdateDeviceStatusRequest:
    r"""AdminUpdateDeviceStatusRequest
    The request to update the device status, as an administrator.
    """
    
    device_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceKey') }})
    user_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    device_remembered_status: Optional[DeviceRememberedStatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceRememberedStatus') }})
    
