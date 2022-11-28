from dataclasses import dataclass, field
from typing import Optional


@dataclass
class MaxAgeRule:
    r"""MaxAgeRule
    A lifecycle rule that deletes application versions after the specified number of days.
    """
    
    enabled: bool = field()
    delete_source_from_s3: Optional[bool] = field(default=None)
    max_age_in_days: Optional[int] = field(default=None)
    
