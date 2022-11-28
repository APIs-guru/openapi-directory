from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CreateStoreImageTaskResult:
    object_key: Optional[str] = field(default=None)
    
