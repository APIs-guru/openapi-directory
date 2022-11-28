from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ApplicationVersionDescriptionsMessage:
    r"""ApplicationVersionDescriptionsMessage
    Result message wrapping a list of application version descriptions.
    """
    
    application_versions: Optional[List[ApplicationVersionDescription]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
