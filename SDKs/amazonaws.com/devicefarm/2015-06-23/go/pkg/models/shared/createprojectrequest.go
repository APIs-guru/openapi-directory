package shared

// CreateProjectRequest
// Represents a request to the create project operation.
type CreateProjectRequest struct {
	DefaultJobTimeoutMinutes *int64 `json:"defaultJobTimeoutMinutes,omitempty"`
	Name                     string `json:"name"`
}
