package shared

type EnvironmentStatusEnum string

const (
	EnvironmentStatusEnumAborting    EnvironmentStatusEnum = "Aborting"
	EnvironmentStatusEnumLaunching   EnvironmentStatusEnum = "Launching"
	EnvironmentStatusEnumUpdating    EnvironmentStatusEnum = "Updating"
	EnvironmentStatusEnumLinkingFrom EnvironmentStatusEnum = "LinkingFrom"
	EnvironmentStatusEnumLinkingTo   EnvironmentStatusEnum = "LinkingTo"
	EnvironmentStatusEnumReady       EnvironmentStatusEnum = "Ready"
	EnvironmentStatusEnumTerminating EnvironmentStatusEnum = "Terminating"
	EnvironmentStatusEnumTerminated  EnvironmentStatusEnum = "Terminated"
)
