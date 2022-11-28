from dataclasses import dataclass, field
from typing import Optional


@dataclass
class MaxCountRule:
    r"""MaxCountRule
    A lifecycle rule that deletes the oldest application version when the maximum count is exceeded.
    """
    
    enabled: bool = field()
    delete_source_from_s3: Optional[bool] = field(default=None)
    max_count: Optional[int] = field(default=None)
    
