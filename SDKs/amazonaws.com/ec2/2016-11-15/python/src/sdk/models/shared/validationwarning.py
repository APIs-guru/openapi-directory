from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ValidationWarning:
    r"""ValidationWarning
    The error codes and error messages that are returned for the parameters or parameter combinations that are not valid when a new launch template or new version of a launch template is created.
    """
    
    errors: Optional[List[ValidationError]] = field(default=None)
    
