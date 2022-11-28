from dataclasses import dataclass, field
from enum import Enum
from . import *


@dataclass
class LambdaFunctionAssociation:
    r"""LambdaFunctionAssociation
    A complex type that contains a Lambda function association.
    """
    
    event_type: EventTypeEnum = field()
    lambda_function_arn: str = field()
    
