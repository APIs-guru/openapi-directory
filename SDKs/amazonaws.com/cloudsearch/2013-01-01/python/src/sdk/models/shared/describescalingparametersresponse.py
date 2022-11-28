from dataclasses import dataclass, field
from . import *


@dataclass
class DescribeScalingParametersResponse:
    r"""DescribeScalingParametersResponse
    The result of a <code>DescribeScalingParameters</code> request. Contains the scaling parameters configured for the domain specified in the request.
    """
    
    scaling_parameters: ScalingParametersStatus = field()
    
