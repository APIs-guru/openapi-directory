package shared

// BuildNotDeleted
// Information about a build that could not be successfully deleted.
type BuildNotDeleted struct {
	ID         *string `json:"id,omitempty"`
	StatusCode *string `json:"statusCode,omitempty"`
}
