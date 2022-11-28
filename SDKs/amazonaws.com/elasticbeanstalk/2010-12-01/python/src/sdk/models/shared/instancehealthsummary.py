from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InstanceHealthSummary:
    r"""InstanceHealthSummary
    Represents summary information about the health of an instance. For more information, see <a href=\"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html\">Health Colors and Statuses</a>.
    """
    
    degraded: Optional[int] = field(default=None)
    info: Optional[int] = field(default=None)
    no_data: Optional[int] = field(default=None)
    ok: Optional[int] = field(default=None)
    pending: Optional[int] = field(default=None)
    severe: Optional[int] = field(default=None)
    unknown: Optional[int] = field(default=None)
    warning: Optional[int] = field(default=None)
    
