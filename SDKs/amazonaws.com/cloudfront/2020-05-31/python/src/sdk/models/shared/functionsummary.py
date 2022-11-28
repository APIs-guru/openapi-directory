from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class FunctionSummary:
    r"""FunctionSummary
    Contains configuration information and metadata about a CloudFront function.
    """
    
    function_config: FunctionConfig = field()
    function_metadata: FunctionMetadata = field()
    name: str = field()
    status: Optional[str] = field(default=None)
    
