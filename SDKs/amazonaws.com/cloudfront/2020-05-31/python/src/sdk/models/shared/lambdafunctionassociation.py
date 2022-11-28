from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class LambdaFunctionAssociation:
    r"""LambdaFunctionAssociation
    A complex type that contains a Lambda@Edge function association.
    """
    
    event_type: EventTypeEnum = field()
    lambda_function_arn: str = field()
    include_body: Optional[bool] = field(default=None)
    
