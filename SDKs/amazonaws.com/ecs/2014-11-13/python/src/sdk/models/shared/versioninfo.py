from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VersionInfo:
    agent_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentHash' }})
    agent_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentVersion' }})
    docker_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerVersion' }})
    
