package shared

type SnapshotLimits struct {
	ManualSnapshotsCurrentCount *int64 `json:"ManualSnapshotsCurrentCount,omitempty"`
	ManualSnapshotsLimit        *int64 `json:"ManualSnapshotsLimit,omitempty"`
	ManualSnapshotsLimitReached *bool  `json:"ManualSnapshotsLimitReached,omitempty"`
}
