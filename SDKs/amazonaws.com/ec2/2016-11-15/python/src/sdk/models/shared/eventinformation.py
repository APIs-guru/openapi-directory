from dataclasses import dataclass, field
from typing import Optional


@dataclass
class EventInformation:
    r"""EventInformation
    Describes an EC2 Fleet or Spot Fleet event.
    """
    
    event_description: Optional[str] = field(default=None)
    event_sub_type: Optional[str] = field(default=None)
    instance_id: Optional[str] = field(default=None)
    
