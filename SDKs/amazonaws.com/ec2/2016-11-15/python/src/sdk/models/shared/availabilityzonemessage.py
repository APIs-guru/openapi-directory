from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AvailabilityZoneMessage:
    r"""AvailabilityZoneMessage
    Describes a message about an Availability Zone, Local Zone, or Wavelength Zone.
    """
    
    message: Optional[str] = field(default=None)
    
