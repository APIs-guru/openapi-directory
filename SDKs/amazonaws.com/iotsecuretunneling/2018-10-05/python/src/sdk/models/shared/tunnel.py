from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import destinationconfig
from . import connectionstate
from . import connectionstate
from . import tunnelstatus_enum
from . import tag
from . import timeoutconfig


@dataclass_json
@dataclass
class Tunnel:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    destination_config: Optional[destinationconfig.DestinationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationConfig' }})
    destination_connection_state: Optional[connectionstate.ConnectionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationConnectionState' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    source_connection_state: Optional[connectionstate.ConnectionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceConnectionState' }})
    status: Optional[tunnelstatus_enum.TunnelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    timeout_config: Optional[timeoutconfig.TimeoutConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutConfig' }})
    tunnel_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tunnelArn' }})
    tunnel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tunnelId' }})
    
