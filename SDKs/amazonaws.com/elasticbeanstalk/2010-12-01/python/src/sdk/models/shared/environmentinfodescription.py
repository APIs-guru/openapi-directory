from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class EnvironmentInfoDescription:
    r"""EnvironmentInfoDescription
    The information retrieved from the Amazon EC2 instances.
    """
    
    ec2_instance_id: Optional[str] = field(default=None)
    info_type: Optional[EnvironmentInfoTypeEnum] = field(default=None)
    message: Optional[str] = field(default=None)
    sample_timestamp: Optional[datetime] = field(default=None)
    
