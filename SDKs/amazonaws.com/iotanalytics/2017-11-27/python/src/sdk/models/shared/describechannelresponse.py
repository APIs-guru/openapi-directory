from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import channel
from . import channelstatistics


@dataclass_json
@dataclass
class DescribeChannelResponse:
    channel: Optional[channel.Channel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    statistics: Optional[channelstatistics.ChannelStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statistics' }})
    
