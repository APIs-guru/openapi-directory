package shared

// PhaseContext
// Additional information about a build phase that has an error. You can use this information for troubleshooting.
type PhaseContext struct {
	Message    *string `json:"message,omitempty"`
	StatusCode *string `json:"statusCode,omitempty"`
}
