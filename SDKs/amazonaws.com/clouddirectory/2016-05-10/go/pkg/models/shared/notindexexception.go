package shared

// NotIndexException
// Indicates that the requested operation can only operate on index objects.
type NotIndexException struct {
	Message *string `json:"Message,omitempty"`
}
