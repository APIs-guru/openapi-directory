from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Builder:
    r"""Builder
    The builder used to build the custom platform.
    """
    
    arn: Optional[str] = field(default=None)
    
