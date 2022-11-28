from dataclasses import dataclass, field
from typing import Optional


@dataclass
class HostProperties:
    r"""HostProperties
    Describes the properties of a Dedicated Host.
    """
    
    cores: Optional[int] = field(default=None)
    instance_family: Optional[str] = field(default=None)
    instance_type: Optional[str] = field(default=None)
    sockets: Optional[int] = field(default=None)
    total_v_cpus: Optional[int] = field(default=None)
    
