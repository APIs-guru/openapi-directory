from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class DeleteFleetError:
    r"""DeleteFleetError
    Describes an EC2 Fleet error.
    """
    
    code: Optional[DeleteFleetErrorCodeEnum] = field(default=None)
    message: Optional[str] = field(default=None)
    
