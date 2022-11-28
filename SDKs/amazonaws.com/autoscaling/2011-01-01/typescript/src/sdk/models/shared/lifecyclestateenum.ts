


export enum LifecycleStateEnum {
    Pending = "Pending",
    PendingWait = "Pending:Wait",
    PendingProceed = "Pending:Proceed",
    Quarantined = "Quarantined",
    InService = "InService",
    Terminating = "Terminating",
    TerminatingWait = "Terminating:Wait",
    TerminatingProceed = "Terminating:Proceed",
    Terminated = "Terminated",
    Detaching = "Detaching",
    Detached = "Detached",
    EnteringStandby = "EnteringStandby",
    Standby = "Standby",
    WarmedPending = "Warmed:Pending",
    WarmedPendingWait = "Warmed:Pending:Wait",
    WarmedPendingProceed = "Warmed:Pending:Proceed",
    WarmedTerminating = "Warmed:Terminating",
    WarmedTerminatingWait = "Warmed:Terminating:Wait",
    WarmedTerminatingProceed = "Warmed:Terminating:Proceed",
    WarmedTerminated = "Warmed:Terminated",
    WarmedStopped = "Warmed:Stopped",
    WarmedRunning = "Warmed:Running"
}
