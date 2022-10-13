from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import agentstatus_enum


@dataclass_json
@dataclass
class AgentListEntry:
    agent_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgentArn' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    status: Optional[agentstatus_enum.AgentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
