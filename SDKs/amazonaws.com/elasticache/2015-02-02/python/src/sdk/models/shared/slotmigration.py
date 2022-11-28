from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SlotMigration:
    r"""SlotMigration
    Represents the progress of an online resharding operation.
    """
    
    progress_percentage: Optional[float] = field(default=None)
    
