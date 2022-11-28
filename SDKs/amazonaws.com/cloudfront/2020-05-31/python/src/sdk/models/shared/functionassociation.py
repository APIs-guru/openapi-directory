from dataclasses import dataclass, field
from enum import Enum
from . import *


@dataclass
class FunctionAssociation:
    r"""FunctionAssociation
    A CloudFront function that is associated with a cache behavior in a CloudFront distribution.
    """
    
    event_type: EventTypeEnum = field()
    function_arn: str = field()
    
