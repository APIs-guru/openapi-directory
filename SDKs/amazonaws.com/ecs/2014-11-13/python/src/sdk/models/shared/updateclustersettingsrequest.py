from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import clustersetting


@dataclass_json
@dataclass
class UpdateClusterSettingsRequest:
    cluster: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    settings: List[clustersetting.ClusterSetting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    
