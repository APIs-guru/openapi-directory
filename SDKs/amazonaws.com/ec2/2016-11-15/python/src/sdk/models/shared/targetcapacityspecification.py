from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class TargetCapacitySpecification:
    r"""TargetCapacitySpecification
    <p>The number of units to request. You can choose to set the target capacity in terms of instances or a performance characteristic that is important to your application workload, such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>, you can specify a target capacity of 0 and add capacity later.</p> <p>You can use the On-Demand Instance <code>MaxTotalPrice</code> parameter, the Spot Instance <code>MaxTotalPrice</code>, or both to ensure that your fleet cost does not exceed your budget. If you set a maximum price per hour for the On-Demand Instances and Spot Instances in your request, EC2 Fleet will launch instances until it reaches the maximum amount that you're willing to pay. When the maximum amount you're willing to pay is reached, the fleet stops launching instances even if it hasn’t met the target capacity. The <code>MaxTotalPrice</code> parameters are located in <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_OnDemandOptions.html\">OnDemandOptions</a> and <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotOptions\">SpotOptions</a>.</p>
    """
    
    default_target_capacity_type: Optional[DefaultTargetCapacityTypeEnum] = field(default=None)
    on_demand_target_capacity: Optional[int] = field(default=None)
    spot_target_capacity: Optional[int] = field(default=None)
    total_target_capacity: Optional[int] = field(default=None)
    
