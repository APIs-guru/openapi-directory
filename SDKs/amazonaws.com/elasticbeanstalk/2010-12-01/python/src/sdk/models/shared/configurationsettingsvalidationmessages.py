from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ConfigurationSettingsValidationMessages:
    r"""ConfigurationSettingsValidationMessages
    Provides a list of validation messages.
    """
    
    messages: Optional[List[ValidationMessage]] = field(default=None)
    
