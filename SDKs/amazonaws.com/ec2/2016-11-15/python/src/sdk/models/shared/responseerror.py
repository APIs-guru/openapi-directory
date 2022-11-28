from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class ResponseError:
    r"""ResponseError
    Describes the error that's returned when you cannot delete a launch template version.
    """
    
    code: Optional[LaunchTemplateErrorCodeEnum] = field(default=None)
    message: Optional[str] = field(default=None)
    
