package shared

type LifecycleStateEnum string

const (
	LifecycleStateEnumPending                  LifecycleStateEnum = "Pending"
	LifecycleStateEnumPendingWait              LifecycleStateEnum = "Pending:Wait"
	LifecycleStateEnumPendingProceed           LifecycleStateEnum = "Pending:Proceed"
	LifecycleStateEnumQuarantined              LifecycleStateEnum = "Quarantined"
	LifecycleStateEnumInService                LifecycleStateEnum = "InService"
	LifecycleStateEnumTerminating              LifecycleStateEnum = "Terminating"
	LifecycleStateEnumTerminatingWait          LifecycleStateEnum = "Terminating:Wait"
	LifecycleStateEnumTerminatingProceed       LifecycleStateEnum = "Terminating:Proceed"
	LifecycleStateEnumTerminated               LifecycleStateEnum = "Terminated"
	LifecycleStateEnumDetaching                LifecycleStateEnum = "Detaching"
	LifecycleStateEnumDetached                 LifecycleStateEnum = "Detached"
	LifecycleStateEnumEnteringStandby          LifecycleStateEnum = "EnteringStandby"
	LifecycleStateEnumStandby                  LifecycleStateEnum = "Standby"
	LifecycleStateEnumWarmedPending            LifecycleStateEnum = "Warmed:Pending"
	LifecycleStateEnumWarmedPendingWait        LifecycleStateEnum = "Warmed:Pending:Wait"
	LifecycleStateEnumWarmedPendingProceed     LifecycleStateEnum = "Warmed:Pending:Proceed"
	LifecycleStateEnumWarmedTerminating        LifecycleStateEnum = "Warmed:Terminating"
	LifecycleStateEnumWarmedTerminatingWait    LifecycleStateEnum = "Warmed:Terminating:Wait"
	LifecycleStateEnumWarmedTerminatingProceed LifecycleStateEnum = "Warmed:Terminating:Proceed"
	LifecycleStateEnumWarmedTerminated         LifecycleStateEnum = "Warmed:Terminated"
	LifecycleStateEnumWarmedStopped            LifecycleStateEnum = "Warmed:Stopped"
	LifecycleStateEnumWarmedRunning            LifecycleStateEnum = "Warmed:Running"
)
