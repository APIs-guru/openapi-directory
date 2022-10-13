from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import destinationconfig
from . import tag
from . import timeoutconfig


@dataclass_json
@dataclass
class OpenTunnelRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    destination_config: Optional[destinationconfig.DestinationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationConfig' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    timeout_config: Optional[timeoutconfig.TimeoutConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutConfig' }})
    
