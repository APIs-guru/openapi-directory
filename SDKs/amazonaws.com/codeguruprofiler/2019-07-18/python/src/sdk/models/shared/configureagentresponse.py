from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import agentconfiguration


@dataclass_json
@dataclass
class ConfigureAgentResponse:
    configuration: agentconfiguration.AgentConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    
