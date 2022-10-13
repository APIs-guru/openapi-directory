package shared

type BatchStopJobRunRequest struct {
	JobName   string   `json:"JobName"`
	JobRunIds []string `json:"JobRunIds"`
}
