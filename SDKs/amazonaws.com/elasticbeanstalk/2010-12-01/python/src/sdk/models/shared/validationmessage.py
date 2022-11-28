from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class ValidationMessage:
    r"""ValidationMessage
    An error or warning for a desired configuration option value.
    """
    
    message: Optional[str] = field(default=None)
    namespace: Optional[str] = field(default=None)
    option_name: Optional[str] = field(default=None)
    severity: Optional[ValidationSeverityEnum] = field(default=None)
    
