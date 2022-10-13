package shared

type GetJobRunRequest struct {
	JobName              string `json:"JobName"`
	PredecessorsIncluded *bool  `json:"PredecessorsIncluded"`
	RunID                string `json:"RunId"`
}
