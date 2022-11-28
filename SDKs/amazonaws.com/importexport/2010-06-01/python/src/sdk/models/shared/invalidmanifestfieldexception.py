from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InvalidManifestFieldException:
    r"""InvalidManifestFieldException
    One or more manifest fields was invalid. Please correct and resubmit.
    """
    
    message: Optional[str] = field(default=None)
    
