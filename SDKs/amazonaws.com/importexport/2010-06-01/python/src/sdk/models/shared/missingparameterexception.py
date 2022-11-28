from dataclasses import dataclass, field
from typing import Optional


@dataclass
class MissingParameterException:
    r"""MissingParameterException
    One or more required parameters was missing from the request.
    """
    
    message: Optional[str] = field(default=None)
    
