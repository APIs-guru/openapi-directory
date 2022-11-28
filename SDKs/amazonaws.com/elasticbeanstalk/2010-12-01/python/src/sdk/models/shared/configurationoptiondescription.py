from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class ConfigurationOptionDescription:
    r"""ConfigurationOptionDescription
    Describes the possible values for a configuration option.
    """
    
    change_severity: Optional[str] = field(default=None)
    default_value: Optional[str] = field(default=None)
    max_length: Optional[int] = field(default=None)
    max_value: Optional[int] = field(default=None)
    min_value: Optional[int] = field(default=None)
    name: Optional[str] = field(default=None)
    namespace: Optional[str] = field(default=None)
    regex: Optional[OptionRestrictionRegex] = field(default=None)
    user_defined: Optional[bool] = field(default=None)
    value_options: Optional[List[str]] = field(default=None)
    value_type: Optional[ConfigurationOptionValueTypeEnum] = field(default=None)
    
