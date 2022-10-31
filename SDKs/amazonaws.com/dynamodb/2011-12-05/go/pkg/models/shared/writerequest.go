package shared

type WriteRequest struct {
	DeleteRequest *DeleteRequest `json:"DeleteRequest,omitempty"`
	PutRequest    *PutRequest    `json:"PutRequest,omitempty"`
}
