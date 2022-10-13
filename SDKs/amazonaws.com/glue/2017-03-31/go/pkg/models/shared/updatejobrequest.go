package shared

type UpdateJobRequest struct {
	JobName   string    `json:"JobName"`
	JobUpdate JobUpdate `json:"JobUpdate"`
}
