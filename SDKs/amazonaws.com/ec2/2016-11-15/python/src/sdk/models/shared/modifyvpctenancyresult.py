from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ModifyVpcTenancyResult:
    return_value: Optional[bool] = field(default=None)
    
