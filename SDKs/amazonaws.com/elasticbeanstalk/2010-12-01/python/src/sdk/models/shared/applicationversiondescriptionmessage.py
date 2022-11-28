from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ApplicationVersionDescriptionMessage:
    r"""ApplicationVersionDescriptionMessage
    Result message wrapping a single description of an application version.
    """
    
    application_version: Optional[ApplicationVersionDescription] = field(default=None)
    
