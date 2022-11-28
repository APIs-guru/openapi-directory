package shared

// WriteRequest
// This structure is a Union of PutRequest and DeleteRequest. It can contain exactly one of <code>PutRequest</code> or <code>DeleteRequest</code>. Never Both. This is enforced in the code.
type WriteRequest struct {
	DeleteRequest *DeleteRequest `json:"DeleteRequest,omitempty"`
	PutRequest    *PutRequest    `json:"PutRequest,omitempty"`
}
