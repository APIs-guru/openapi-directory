from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class UpdateStreamingDistributionResult:
    r"""UpdateStreamingDistributionResult
    The returned result of the corresponding request.
    """
    
    streaming_distribution: Optional[StreamingDistribution] = field(default=None)
    
