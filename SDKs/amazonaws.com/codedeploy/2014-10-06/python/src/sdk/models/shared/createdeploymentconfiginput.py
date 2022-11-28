from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDeploymentConfigInput:
    r"""CreateDeploymentConfigInput
    Represents the input of a <code>CreateDeploymentConfig</code> operation.
    """
    
    deployment_config_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentConfigName') }})
    compute_platform: Optional[ComputePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computePlatform') }})
    minimum_healthy_hosts: Optional[MinimumHealthyHosts] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumHealthyHosts') }})
    traffic_routing_config: Optional[TrafficRoutingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trafficRoutingConfig') }})
    
