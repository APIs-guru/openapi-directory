from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TooManyLambdaFunctionAssociations:
    r"""TooManyLambdaFunctionAssociations
    Your request contains more Lambda function associations than are allowed per distribution.
    """
    
    message: Optional[str] = field(default=None)
    
