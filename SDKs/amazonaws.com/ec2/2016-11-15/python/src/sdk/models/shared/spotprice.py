from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class SpotPrice:
    r"""SpotPrice
    Describes the maximum price per hour that you are willing to pay for a Spot Instance.
    """
    
    availability_zone: Optional[str] = field(default=None)
    instance_type: Optional[InstanceTypeEnum] = field(default=None)
    product_description: Optional[RiProductDescriptionEnum] = field(default=None)
    spot_price: Optional[str] = field(default=None)
    timestamp: Optional[datetime] = field(default=None)
    
