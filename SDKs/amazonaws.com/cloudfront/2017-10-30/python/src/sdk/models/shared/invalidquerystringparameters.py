from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InvalidQueryStringParameters:
    message: Optional[str] = field(default=None)
    
