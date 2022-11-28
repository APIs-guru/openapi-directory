from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ReshardingStatus:
    r"""ReshardingStatus
    The status of an online resharding operation.
    """
    
    slot_migration: Optional[SlotMigration] = field(default=None)
    
