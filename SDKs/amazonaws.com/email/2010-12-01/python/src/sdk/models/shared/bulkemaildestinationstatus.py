from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class BulkEmailDestinationStatus:
    r"""BulkEmailDestinationStatus
    An object that contains the response from the <code>SendBulkTemplatedEmail</code> operation.
    """
    
    error: Optional[str] = field(default=None)
    message_id: Optional[str] = field(default=None)
    status: Optional[BulkEmailStatusEnum] = field(default=None)
    
