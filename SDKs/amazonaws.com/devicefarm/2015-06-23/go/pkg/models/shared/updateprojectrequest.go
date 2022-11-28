package shared

// UpdateProjectRequest
// Represents a request to the update project operation.
type UpdateProjectRequest struct {
	Arn                      string  `json:"arn"`
	DefaultJobTimeoutMinutes *int64  `json:"defaultJobTimeoutMinutes,omitempty"`
	Name                     *string `json:"name,omitempty"`
}
