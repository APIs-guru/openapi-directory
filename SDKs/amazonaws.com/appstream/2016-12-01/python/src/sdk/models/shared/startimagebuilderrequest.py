from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StartImageBuilderRequest:
    appstream_agent_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppstreamAgentVersion' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
