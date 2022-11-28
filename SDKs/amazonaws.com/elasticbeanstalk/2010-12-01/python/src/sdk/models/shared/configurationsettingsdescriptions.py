from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ConfigurationSettingsDescriptions:
    r"""ConfigurationSettingsDescriptions
    The results from a request to change the configuration settings of an environment.
    """
    
    configuration_settings: Optional[List[ConfigurationSettingsDescription]] = field(default=None)
    
