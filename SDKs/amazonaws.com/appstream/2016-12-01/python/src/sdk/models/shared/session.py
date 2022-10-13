from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import authenticationtype_enum
from . import sessionconnectionstate_enum
from . import networkaccessconfiguration
from . import sessionstate_enum


@dataclass_json
@dataclass
class Session:
    authentication_type: Optional[authenticationtype_enum.AuthenticationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthenticationType' }})
    connection_state: Optional[sessionconnectionstate_enum.SessionConnectionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionState' }})
    fleet_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetName' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    max_expiration_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxExpirationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    network_access_configuration: Optional[networkaccessconfiguration.NetworkAccessConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkAccessConfiguration' }})
    stack_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackName' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: sessionstate_enum.SessionStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    user_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserId' }})
    
