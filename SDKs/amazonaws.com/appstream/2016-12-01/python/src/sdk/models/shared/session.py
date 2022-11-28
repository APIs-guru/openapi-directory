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
class Session:
    r"""Session
    Describes a streaming session.
    """
    
    fleet_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetName') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    stack_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackName') }})
    state: SessionStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    user_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserId') }})
    authentication_type: Optional[AuthenticationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthenticationType') }})
    connection_state: Optional[SessionConnectionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionState') }})
    max_expiration_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxExpirationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    network_access_configuration: Optional[NetworkAccessConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkAccessConfiguration') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
