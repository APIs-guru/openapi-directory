package shared

type DeploymentOverview struct {
	Failed     *int64 `json:"Failed,omitempty"`
	InProgress *int64 `json:"InProgress,omitempty"`
	Pending    *int64 `json:"Pending,omitempty"`
	Ready      *int64 `json:"Ready,omitempty"`
	Skipped    *int64 `json:"Skipped,omitempty"`
	Succeeded  *int64 `json:"Succeeded,omitempty"`
}
