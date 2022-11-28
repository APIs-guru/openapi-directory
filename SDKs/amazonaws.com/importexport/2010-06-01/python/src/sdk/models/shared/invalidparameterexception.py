from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InvalidParameterException:
    r"""InvalidParameterException
    One or more parameters had an invalid value.
    """
    
    message: Optional[str] = field(default=None)
    
