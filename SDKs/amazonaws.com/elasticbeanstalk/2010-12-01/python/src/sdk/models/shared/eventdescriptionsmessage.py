from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class EventDescriptionsMessage:
    r"""EventDescriptionsMessage
    Result message wrapping a list of event descriptions.
    """
    
    events: Optional[List[EventDescription]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
