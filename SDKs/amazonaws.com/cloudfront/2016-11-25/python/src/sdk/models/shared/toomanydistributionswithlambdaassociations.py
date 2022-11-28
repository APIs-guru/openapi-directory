from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TooManyDistributionsWithLambdaAssociations:
    r"""TooManyDistributionsWithLambdaAssociations
    Processing your request would cause the maximum number of distributions with Lambda function associations per owner to be exceeded.
    """
    
    message: Optional[str] = field(default=None)
    
