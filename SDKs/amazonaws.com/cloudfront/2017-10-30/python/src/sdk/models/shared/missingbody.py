from dataclasses import dataclass, field
from typing import Optional


@dataclass
class MissingBody:
    r"""MissingBody
    This operation requires a body. Ensure that the body is present and the <code>Content-Type</code> header is set.
    """
    
    message: Optional[str] = field(default=None)
    
