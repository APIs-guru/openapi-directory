from dataclasses import dataclass, field
from typing import Optional


@dataclass
class BundleTaskError:
    r"""BundleTaskError
    Describes an error for <a>BundleInstance</a>.
    """
    
    code: Optional[str] = field(default=None)
    message: Optional[str] = field(default=None)
    
