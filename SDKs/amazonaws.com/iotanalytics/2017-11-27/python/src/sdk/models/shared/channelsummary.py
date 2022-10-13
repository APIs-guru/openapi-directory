from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import channelstoragesummary
from . import channelstatus_enum


@dataclass_json
@dataclass
class ChannelSummary:
    channel_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelName' }})
    channel_storage: Optional[channelstoragesummary.ChannelStorageSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelStorage' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_message_arrival_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastMessageArrivalTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[channelstatus_enum.ChannelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
