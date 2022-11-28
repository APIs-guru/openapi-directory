from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DesiredConfiguration:
    r"""DesiredConfiguration
    <p>Describes the desired configuration for an instance refresh. </p> <p>If you specify a desired configuration, you must specify either a <code>LaunchTemplate</code> or a <code>MixedInstancesPolicy</code>. </p>
    """
    
    launch_template: Optional[LaunchTemplateSpecification] = field(default=None)
    mixed_instances_policy: Optional[MixedInstancesPolicy] = field(default=None)
    
