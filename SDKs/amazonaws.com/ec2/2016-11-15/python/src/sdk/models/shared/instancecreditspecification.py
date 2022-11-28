from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InstanceCreditSpecification:
    r"""InstanceCreditSpecification
    Describes the credit option for CPU usage of a burstable performance instance. 
    """
    
    cpu_credits: Optional[str] = field(default=None)
    instance_id: Optional[str] = field(default=None)
    
