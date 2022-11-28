from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class LaunchTemplatePlacement:
    r"""LaunchTemplatePlacement
    Describes the placement of an instance.
    """
    
    affinity: Optional[str] = field(default=None)
    availability_zone: Optional[str] = field(default=None)
    group_name: Optional[str] = field(default=None)
    host_id: Optional[str] = field(default=None)
    host_resource_group_arn: Optional[str] = field(default=None)
    partition_number: Optional[int] = field(default=None)
    spread_domain: Optional[str] = field(default=None)
    tenancy: Optional[TenancyEnum] = field(default=None)
    
