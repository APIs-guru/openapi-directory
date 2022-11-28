from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ListFunctionsResult:
    function_list: Optional[FunctionList] = field(default=None)
    
