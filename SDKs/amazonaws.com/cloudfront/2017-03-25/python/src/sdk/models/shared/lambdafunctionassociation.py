from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class LambdaFunctionAssociation:
    r"""LambdaFunctionAssociation
    A complex type that contains a Lambda function association.
    """
    
    event_type: Optional[EventTypeEnum] = field(default=None)
    lambda_function_arn: Optional[str] = field(default=None)
    
