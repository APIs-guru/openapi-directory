package shared

type CapabilitySyncStatusEnum string

const (
	CapabilitySyncStatusEnumInSync     CapabilitySyncStatusEnum = "IN_SYNC"
	CapabilitySyncStatusEnumOutOfSync  CapabilitySyncStatusEnum = "OUT_OF_SYNC"
	CapabilitySyncStatusEnumSyncFailed CapabilitySyncStatusEnum = "SYNC_FAILED"
	CapabilitySyncStatusEnumUnknown    CapabilitySyncStatusEnum = "UNKNOWN"
)
