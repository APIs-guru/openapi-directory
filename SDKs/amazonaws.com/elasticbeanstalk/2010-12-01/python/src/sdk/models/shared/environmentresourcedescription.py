from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class EnvironmentResourceDescription:
    r"""EnvironmentResourceDescription
    Describes the AWS resources in use by this environment. This data is live.
    """
    
    auto_scaling_groups: Optional[List[AutoScalingGroup]] = field(default=None)
    environment_name: Optional[str] = field(default=None)
    instances: Optional[List[Instance]] = field(default=None)
    launch_configurations: Optional[List[LaunchConfiguration]] = field(default=None)
    launch_templates: Optional[List[LaunchTemplate]] = field(default=None)
    load_balancers: Optional[List[LoadBalancer]] = field(default=None)
    queues: Optional[List[Queue]] = field(default=None)
    triggers: Optional[List[Trigger]] = field(default=None)
    
