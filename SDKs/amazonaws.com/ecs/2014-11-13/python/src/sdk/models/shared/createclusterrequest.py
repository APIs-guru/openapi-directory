from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import clusterconfiguration
from . import capacityproviderstrategyitem
from . import clustersetting
from . import tag


@dataclass_json
@dataclass
class CreateClusterRequest:
    capacity_providers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacityProviders' }})
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterName' }})
    configuration: Optional[clusterconfiguration.ClusterConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    default_capacity_provider_strategy: Optional[List[capacityproviderstrategyitem.CapacityProviderStrategyItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultCapacityProviderStrategy' }})
    settings: Optional[List[clustersetting.ClusterSetting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
