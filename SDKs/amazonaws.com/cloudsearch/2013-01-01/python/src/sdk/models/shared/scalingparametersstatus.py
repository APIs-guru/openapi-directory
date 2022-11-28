from dataclasses import dataclass, field
from . import *


@dataclass
class ScalingParametersStatus:
    r"""ScalingParametersStatus
    The status and configuration of a search domain's scaling parameters. 
    """
    
    options: ScalingParameters = field()
    status: OptionStatus = field()
    
