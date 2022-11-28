from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CreditSpecification:
    r"""CreditSpecification
    Describes the credit option for CPU usage of a T2, T3, or T3a instance.
    """
    
    cpu_credits: Optional[str] = field(default=None)
    
