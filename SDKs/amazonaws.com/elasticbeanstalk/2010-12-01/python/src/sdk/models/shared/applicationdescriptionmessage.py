from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ApplicationDescriptionMessage:
    r"""ApplicationDescriptionMessage
    Result message containing a single description of an application.
    """
    
    application: Optional[ApplicationDescription] = field(default=None)
    
