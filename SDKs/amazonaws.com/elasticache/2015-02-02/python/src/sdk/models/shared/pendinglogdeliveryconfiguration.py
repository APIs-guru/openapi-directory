from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class PendingLogDeliveryConfiguration:
    r"""PendingLogDeliveryConfiguration
    The log delivery configurations being modified 
    """
    
    destination_details: Optional[DestinationDetails] = field(default=None)
    destination_type: Optional[DestinationTypeEnum] = field(default=None)
    log_format: Optional[LogFormatEnum] = field(default=None)
    log_type: Optional[LogTypeEnum] = field(default=None)
    
