from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UnableToCancelJobIDException:
    r"""UnableToCancelJobIDException
    AWS Import/Export cannot cancel the job
    """
    
    message: Optional[str] = field(default=None)
    
