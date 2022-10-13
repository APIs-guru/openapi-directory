from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import agentpreview


@dataclass_json
@dataclass
class PreviewAgentsResponse:
    agent_previews: List[agentpreview.AgentPreview] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentPreviews' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
