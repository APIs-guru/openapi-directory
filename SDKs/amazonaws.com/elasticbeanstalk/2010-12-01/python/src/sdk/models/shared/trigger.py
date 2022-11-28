from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Trigger:
    r"""Trigger
    Describes a trigger.
    """
    
    name: Optional[str] = field(default=None)
    
