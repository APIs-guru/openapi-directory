from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetFunctionResult:
    function_code: Optional[str] = field(default=None)
    
