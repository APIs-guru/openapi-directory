package shared

type StatusEnum string

const (
	StatusEnumLatest StatusEnum = "LATEST"
	StatusEnumStale  StatusEnum = "STALE"
)
