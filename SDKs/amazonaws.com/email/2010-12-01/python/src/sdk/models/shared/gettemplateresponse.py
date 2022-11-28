from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetTemplateResponse:
    template: Optional[Template] = field(default=None)
    
