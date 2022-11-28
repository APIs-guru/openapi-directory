from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DescribeInstanceEventNotificationAttributesResult:
    instance_tag_attribute: Optional[InstanceTagNotificationAttribute] = field(default=None)
    
