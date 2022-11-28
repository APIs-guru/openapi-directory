package shared

// ObjectNotDetachedException
// Indicates that the requested operation cannot be completed because the object has not been detached from the tree.
type ObjectNotDetachedException struct {
	Message *string `json:"Message,omitempty"`
}
