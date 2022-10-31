package shared




type InstanceGroupStateEnum string

const (
    InstanceGroupStateEnumProvisioning InstanceGroupStateEnum = "PROVISIONING"
InstanceGroupStateEnumBootstrapping InstanceGroupStateEnum = "BOOTSTRAPPING"
InstanceGroupStateEnumRunning InstanceGroupStateEnum = "RUNNING"
InstanceGroupStateEnumReconfiguring InstanceGroupStateEnum = "RECONFIGURING"
InstanceGroupStateEnumResizing InstanceGroupStateEnum = "RESIZING"
InstanceGroupStateEnumSuspended InstanceGroupStateEnum = "SUSPENDED"
InstanceGroupStateEnumTerminating InstanceGroupStateEnum = "TERMINATING"
InstanceGroupStateEnumTerminated InstanceGroupStateEnum = "TERMINATED"
InstanceGroupStateEnumArrested InstanceGroupStateEnum = "ARRESTED"
InstanceGroupStateEnumShuttingDown InstanceGroupStateEnum = "SHUTTING_DOWN"
InstanceGroupStateEnumEnded InstanceGroupStateEnum = "ENDED"
)


