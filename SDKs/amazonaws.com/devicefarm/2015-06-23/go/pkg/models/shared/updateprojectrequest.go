package shared

type UpdateProjectRequest struct {
	Arn                      string  `json:"arn"`
	DefaultJobTimeoutMinutes *int64  `json:"defaultJobTimeoutMinutes"`
	Name                     *string `json:"name"`
}
