from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Limit:
    r"""Limit
    Information about an Elastic Load Balancing resource limit for your Amazon Web Services account.
    """
    
    max: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    
