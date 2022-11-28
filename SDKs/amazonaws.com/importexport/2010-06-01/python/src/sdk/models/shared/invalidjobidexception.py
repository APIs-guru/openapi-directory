from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InvalidJobIDException:
    r"""InvalidJobIDException
    The JOBID was missing, not found, or not associated with the AWS account.
    """
    
    message: Optional[str] = field(default=None)
    
