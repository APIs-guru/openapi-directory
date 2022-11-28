from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InvalidLambdaFunctionAssociation:
    r"""InvalidLambdaFunctionAssociation
    The specified Lambda function association is invalid.
    """
    
    message: Optional[str] = field(default=None)
    
