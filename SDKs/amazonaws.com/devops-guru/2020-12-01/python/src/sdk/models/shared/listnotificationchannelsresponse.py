from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import notificationchannel


@dataclass_json
@dataclass
class ListNotificationChannelsResponse:
    channels: Optional[List[notificationchannel.NotificationChannel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Channels' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
