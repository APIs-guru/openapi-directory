from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import matchmakingconfiguration


@dataclass_json
@dataclass
class UpdateMatchmakingConfigurationOutput:
    configuration: Optional[matchmakingconfiguration.MatchmakingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Configuration' }})
    
