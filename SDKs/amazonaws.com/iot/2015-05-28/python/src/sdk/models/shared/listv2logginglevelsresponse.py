from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import logtargetconfiguration


@dataclass_json
@dataclass
class ListV2LoggingLevelsResponse:
    log_target_configurations: Optional[List[logtargetconfiguration.LogTargetConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logTargetConfigurations' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
