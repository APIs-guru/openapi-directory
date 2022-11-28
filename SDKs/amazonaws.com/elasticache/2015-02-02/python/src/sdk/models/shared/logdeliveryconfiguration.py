from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class LogDeliveryConfiguration:
    r"""LogDeliveryConfiguration
    Returns the destination, format and type of the logs. 
    """
    
    destination_details: Optional[DestinationDetails] = field(default=None)
    destination_type: Optional[DestinationTypeEnum] = field(default=None)
    log_format: Optional[LogFormatEnum] = field(default=None)
    log_type: Optional[LogTypeEnum] = field(default=None)
    message: Optional[str] = field(default=None)
    status: Optional[LogDeliveryConfigurationStatusEnum] = field(default=None)
    
