from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TagDescription:
    r"""TagDescription
    Describes a tag for an Auto Scaling group.
    """
    
    key: Optional[str] = field(default=None)
    propagate_at_launch: Optional[bool] = field(default=None)
    resource_id: Optional[str] = field(default=None)
    resource_type: Optional[str] = field(default=None)
    value: Optional[str] = field(default=None)
    
