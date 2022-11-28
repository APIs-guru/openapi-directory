from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PreconditionFailed:
    r"""PreconditionFailed
    The precondition given in one or more of the request-header fields evaluated to <code>false</code>. 
    """
    
    message: Optional[str] = field(default=None)
    
