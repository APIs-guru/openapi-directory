from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import estimatedresourcesize


@dataclass_json
@dataclass
class ChannelStatistics:
    size: Optional[estimatedresourcesize.EstimatedResourceSize] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    
