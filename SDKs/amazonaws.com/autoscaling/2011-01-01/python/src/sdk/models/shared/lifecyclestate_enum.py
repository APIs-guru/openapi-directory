from dataclasses import dataclass, field
from enum import Enum

class LifecycleStateEnum(str, Enum):
    PENDING = "Pending"
    PENDING_WAIT = "Pending:Wait"
    PENDING_PROCEED = "Pending:Proceed"
    QUARANTINED = "Quarantined"
    IN_SERVICE = "InService"
    TERMINATING = "Terminating"
    TERMINATING_WAIT = "Terminating:Wait"
    TERMINATING_PROCEED = "Terminating:Proceed"
    TERMINATED = "Terminated"
    DETACHING = "Detaching"
    DETACHED = "Detached"
    ENTERING_STANDBY = "EnteringStandby"
    STANDBY = "Standby"
    WARMED_PENDING = "Warmed:Pending"
    WARMED_PENDING_WAIT = "Warmed:Pending:Wait"
    WARMED_PENDING_PROCEED = "Warmed:Pending:Proceed"
    WARMED_TERMINATING = "Warmed:Terminating"
    WARMED_TERMINATING_WAIT = "Warmed:Terminating:Wait"
    WARMED_TERMINATING_PROCEED = "Warmed:Terminating:Proceed"
    WARMED_TERMINATED = "Warmed:Terminated"
    WARMED_STOPPED = "Warmed:Stopped"
    WARMED_RUNNING = "Warmed:Running"

