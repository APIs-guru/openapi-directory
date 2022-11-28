from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DescribeAccountLimitsAnswer:
    max_number_of_auto_scaling_groups: Optional[int] = field(default=None)
    max_number_of_launch_configurations: Optional[int] = field(default=None)
    number_of_auto_scaling_groups: Optional[int] = field(default=None)
    number_of_launch_configurations: Optional[int] = field(default=None)
    
