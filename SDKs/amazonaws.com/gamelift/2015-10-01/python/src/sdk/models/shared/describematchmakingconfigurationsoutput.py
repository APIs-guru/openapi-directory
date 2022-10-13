from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import matchmakingconfiguration


@dataclass_json
@dataclass
class DescribeMatchmakingConfigurationsOutput:
    configurations: Optional[List[matchmakingconfiguration.MatchmakingConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Configurations' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
