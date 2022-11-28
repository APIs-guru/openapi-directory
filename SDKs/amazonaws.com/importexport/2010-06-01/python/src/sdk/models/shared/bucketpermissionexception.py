from dataclasses import dataclass, field
from typing import Optional


@dataclass
class BucketPermissionException:
    r"""BucketPermissionException
    The account specified does not have the appropriate bucket permissions.
    """
    
    message: Optional[str] = field(default=None)
    
