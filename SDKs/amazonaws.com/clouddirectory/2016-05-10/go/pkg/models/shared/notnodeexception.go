package shared

// NotNodeException
// Occurs when any invalid operations are performed on an object that is not a node, such as calling <code>ListObjectChildren</code> for a leaf node object.
type NotNodeException struct {
	Message *string `json:"Message,omitempty"`
}
