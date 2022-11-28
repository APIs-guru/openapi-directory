from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class UpdateDistributionResult:
    r"""UpdateDistributionResult
    The returned result of the corresponding request.
    """
    
    distribution: Optional[Distribution] = field(default=None)
    
