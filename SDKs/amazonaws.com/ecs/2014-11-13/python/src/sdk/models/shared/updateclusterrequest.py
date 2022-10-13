from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import clusterconfiguration
from . import clustersetting


@dataclass_json
@dataclass
class UpdateClusterRequest:
    cluster: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    configuration: Optional[clusterconfiguration.ClusterConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    settings: Optional[List[clustersetting.ClusterSetting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    
