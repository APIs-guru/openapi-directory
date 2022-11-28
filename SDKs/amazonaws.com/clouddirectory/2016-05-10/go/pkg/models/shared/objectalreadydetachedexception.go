package shared

// ObjectAlreadyDetachedException
// Indicates that the object is not attached to the index.
type ObjectAlreadyDetachedException struct {
	Message *string `json:"Message,omitempty"`
}
