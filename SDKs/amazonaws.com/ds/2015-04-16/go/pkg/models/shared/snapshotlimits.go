package shared

type SnapshotLimits struct {
	ManualSnapshotsCurrentCount *int64 `json:"ManualSnapshotsCurrentCount"`
	ManualSnapshotsLimit        *int64 `json:"ManualSnapshotsLimit"`
	ManualSnapshotsLimitReached *bool  `json:"ManualSnapshotsLimitReached"`
}
