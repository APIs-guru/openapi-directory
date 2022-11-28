package shared

// SnapshotLimits
// Contains manual snapshot limit information for a directory.
type SnapshotLimits struct {
	ManualSnapshotsCurrentCount *int64 `json:"ManualSnapshotsCurrentCount,omitempty"`
	ManualSnapshotsLimit        *int64 `json:"ManualSnapshotsLimit,omitempty"`
	ManualSnapshotsLimitReached *bool  `json:"ManualSnapshotsLimitReached,omitempty"`
}
