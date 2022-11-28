from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ValidationError:
    r"""ValidationError
    The error code and error message that is returned for a parameter or parameter combination that is not valid when a new launch template or new version of a launch template is created.
    """
    
    code: Optional[str] = field(default=None)
    message: Optional[str] = field(default=None)
    
