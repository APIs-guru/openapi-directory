from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ConfigurationOptionsDescription:
    r"""ConfigurationOptionsDescription
    Describes the settings for a specified configuration set.
    """
    
    options: Optional[List[ConfigurationOptionDescription]] = field(default=None)
    platform_arn: Optional[str] = field(default=None)
    solution_stack_name: Optional[str] = field(default=None)
    
