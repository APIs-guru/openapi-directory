from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CancelJobOutput:
    r"""CancelJobOutput
    Output structure for the CancelJob operation.
    """
    
    success: Optional[bool] = field(default=None)
    
