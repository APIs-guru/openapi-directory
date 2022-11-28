from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Queue:
    r"""Queue
    Describes a queue.
    """
    
    name: Optional[str] = field(default=None)
    url: Optional[str] = field(default=None)
    
