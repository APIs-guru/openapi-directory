package shared

// InvalidNextTokenException
// Indicates that the <code>NextToken</code> value is not valid.
type InvalidNextTokenException struct {
	Message *string `json:"Message,omitempty"`
}
