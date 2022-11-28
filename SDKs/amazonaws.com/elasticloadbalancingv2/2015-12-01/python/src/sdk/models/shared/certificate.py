from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Certificate:
    r"""Certificate
    Information about an SSL server certificate.
    """
    
    certificate_arn: Optional[str] = field(default=None)
    is_default: Optional[bool] = field(default=None)
    
