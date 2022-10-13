from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import clusterstate_enum


@dataclass_json
@dataclass
class InitializeClusterResponse:
    state: Optional[clusterstate_enum.ClusterStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    state_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateMessage' }})
    
