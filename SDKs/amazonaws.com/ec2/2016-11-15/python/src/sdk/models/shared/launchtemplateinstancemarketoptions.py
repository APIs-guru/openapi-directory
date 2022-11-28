from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class LaunchTemplateInstanceMarketOptions:
    r"""LaunchTemplateInstanceMarketOptions
    The market (purchasing) option for the instances.
    """
    
    market_type: Optional[MarketTypeEnum] = field(default=None)
    spot_options: Optional[LaunchTemplateSpotMarketOptions] = field(default=None)
    
