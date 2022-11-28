from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from . import *


@dataclass
class UpdateScalingParametersResponse:
    r"""UpdateScalingParametersResponse
    The result of a <code>UpdateScalingParameters</code> request. Contains the status of the newly-configured scaling parameters.
    """
    
    scaling_parameters: ScalingParametersStatus = field()
    
