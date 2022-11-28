from dataclasses import dataclass, field
from . import *


@dataclass
class KeyGroupSummary:
    r"""KeyGroupSummary
    Contains information about a key group.
    """
    
    key_group: KeyGroup = field()
    
