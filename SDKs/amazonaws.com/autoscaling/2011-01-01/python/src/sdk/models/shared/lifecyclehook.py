from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LifecycleHook:
    r"""LifecycleHook
    Describes a lifecycle hook, which tells Amazon EC2 Auto Scaling that you want to perform an action whenever it launches instances or terminates instances.
    """
    
    auto_scaling_group_name: Optional[str] = field(default=None)
    default_result: Optional[str] = field(default=None)
    global_timeout: Optional[int] = field(default=None)
    heartbeat_timeout: Optional[int] = field(default=None)
    lifecycle_hook_name: Optional[str] = field(default=None)
    lifecycle_transition: Optional[str] = field(default=None)
    notification_metadata: Optional[str] = field(default=None)
    notification_target_arn: Optional[str] = field(default=None)
    role_arn: Optional[str] = field(default=None)
    
