package shared

// ResourceNotFoundException
// The specified resource could not be found.
type ResourceNotFoundException struct {
	Message *string `json:"Message,omitempty"`
}
