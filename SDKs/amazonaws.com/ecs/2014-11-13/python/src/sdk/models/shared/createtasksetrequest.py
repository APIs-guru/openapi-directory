from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import capacityproviderstrategyitem
from . import launchtype_enum
from . import loadbalancer
from . import networkconfiguration
from . import scale
from . import serviceregistry
from . import tag


@dataclass_json
@dataclass
class CreateTaskSetRequest:
    capacity_provider_strategy: Optional[List[capacityproviderstrategyitem.CapacityProviderStrategyItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacityProviderStrategy' }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    cluster: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalId' }})
    launch_type: Optional[launchtype_enum.LaunchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchType' }})
    load_balancers: Optional[List[loadbalancer.LoadBalancer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loadBalancers' }})
    network_configuration: Optional[networkconfiguration.NetworkConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkConfiguration' }})
    platform_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platformVersion' }})
    scale: Optional[scale.Scale] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scale' }})
    service: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    service_registries: Optional[List[serviceregistry.ServiceRegistry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceRegistries' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    task_definition: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskDefinition' }})
    
