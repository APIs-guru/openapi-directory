from dataclasses import dataclass, field
from enum import Enum
from . import *


@dataclass
class FunctionConfig:
    r"""FunctionConfig
    Contains configuration information about a CloudFront function.
    """
    
    comment: str = field()
    runtime: FunctionRuntimeEnum = field()
    
