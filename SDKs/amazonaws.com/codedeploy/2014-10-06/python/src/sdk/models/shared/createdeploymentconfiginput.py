from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import computeplatform_enum
from . import minimumhealthyhosts
from . import trafficroutingconfig


@dataclass_json
@dataclass
class CreateDeploymentConfigInput:
    compute_platform: Optional[computeplatform_enum.ComputePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computePlatform' }})
    deployment_config_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentConfigName' }})
    minimum_healthy_hosts: Optional[minimumhealthyhosts.MinimumHealthyHosts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumHealthyHosts' }})
    traffic_routing_config: Optional[trafficroutingconfig.TrafficRoutingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trafficRoutingConfig' }})
    
