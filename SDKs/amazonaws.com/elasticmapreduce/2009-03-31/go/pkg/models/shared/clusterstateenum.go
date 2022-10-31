package shared

type ClusterStateEnum string

const (
	ClusterStateEnumStarting             ClusterStateEnum = "STARTING"
	ClusterStateEnumBootstrapping        ClusterStateEnum = "BOOTSTRAPPING"
	ClusterStateEnumRunning              ClusterStateEnum = "RUNNING"
	ClusterStateEnumWaiting              ClusterStateEnum = "WAITING"
	ClusterStateEnumTerminating          ClusterStateEnum = "TERMINATING"
	ClusterStateEnumTerminated           ClusterStateEnum = "TERMINATED"
	ClusterStateEnumTerminatedWithErrors ClusterStateEnum = "TERMINATED_WITH_ERRORS"
)
