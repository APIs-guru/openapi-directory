package shared

// WriteRequest
// Represents an operation to perform - either <code>DeleteItem</code> or <code>PutItem</code>. You can only request one of these operations, not both, in a single <code>WriteRequest</code>. If you do need to perform both of these operations, you need to provide two separate <code>WriteRequest</code> objects.
type WriteRequest struct {
	DeleteRequest *DeleteRequest `json:"DeleteRequest,omitempty"`
	PutRequest    *PutRequest    `json:"PutRequest,omitempty"`
}
