package shared

type DeploymentOverview struct {
	Failed     *int64 `json:"Failed"`
	InProgress *int64 `json:"InProgress"`
	Pending    *int64 `json:"Pending"`
	Ready      *int64 `json:"Ready"`
	Skipped    *int64 `json:"Skipped"`
	Succeeded  *int64 `json:"Succeeded"`
}
