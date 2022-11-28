from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class MixedInstancesPolicy:
    r"""MixedInstancesPolicy
    Describes a mixed instances policy. A mixed instances policy contains the instance types Amazon EC2 Auto Scaling can launch, and other information Amazon EC2 Auto Scaling can use to launch instances to help you optimize your costs. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-purchase-options.html\">Auto Scaling groups with multiple instance types and purchase options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
    """
    
    instances_distribution: Optional[InstancesDistribution] = field(default=None)
    launch_template: Optional[LaunchTemplate] = field(default=None)
    
