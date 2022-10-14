package shared

type ValidationError struct {
	ErrorMessage *string `json:"errorMessage,omitempty"`
}
