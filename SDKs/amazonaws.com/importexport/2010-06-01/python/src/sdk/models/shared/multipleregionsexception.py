from dataclasses import dataclass, field
from typing import Optional


@dataclass
class MultipleRegionsException:
    r"""MultipleRegionsException
    Your manifest file contained buckets from multiple regions. A job is restricted to buckets from one region. Please correct and resubmit.
    """
    
    message: Optional[str] = field(default=None)
    
