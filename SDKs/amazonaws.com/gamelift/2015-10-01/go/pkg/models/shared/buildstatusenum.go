package shared

type BuildStatusEnum string

const (
	BuildStatusEnumInitialized BuildStatusEnum = "INITIALIZED"
	BuildStatusEnumReady       BuildStatusEnum = "READY"
	BuildStatusEnumFailed      BuildStatusEnum = "FAILED"
)
