from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SuspendedProcess:
    r"""SuspendedProcess
    <p>Describes an auto scaling process that has been suspended.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html#process-types\">Scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    """
    
    process_name: Optional[str] = field(default=None)
    suspension_reason: Optional[str] = field(default=None)
    
