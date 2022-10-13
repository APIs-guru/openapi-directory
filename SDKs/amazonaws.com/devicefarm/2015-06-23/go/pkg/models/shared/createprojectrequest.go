package shared

type CreateProjectRequest struct {
	DefaultJobTimeoutMinutes *int64 `json:"defaultJobTimeoutMinutes"`
	Name                     string `json:"name"`
}
