from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class InstanceFamilyCreditSpecification:
    r"""InstanceFamilyCreditSpecification
    Describes the default credit option for CPU usage of a burstable performance instance family.
    """
    
    cpu_credits: Optional[str] = field(default=None)
    instance_family: Optional[UnlimitedSupportedInstanceFamilyEnum] = field(default=None)
    
