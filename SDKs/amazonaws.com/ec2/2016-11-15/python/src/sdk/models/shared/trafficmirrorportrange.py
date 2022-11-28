from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TrafficMirrorPortRange:
    r"""TrafficMirrorPortRange
    Describes the Traffic Mirror port range.
    """
    
    from_port: Optional[int] = field(default=None)
    to_port: Optional[int] = field(default=None)
    
