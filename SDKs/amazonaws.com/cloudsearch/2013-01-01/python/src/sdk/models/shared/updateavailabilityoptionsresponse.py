from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class UpdateAvailabilityOptionsResponse:
    r"""UpdateAvailabilityOptionsResponse
    The result of a <code>UpdateAvailabilityOptions</code> request. Contains the status of the domain's availability options. 
    """
    
    availability_options: Optional[AvailabilityOptionsStatus] = field(default=None)
    
