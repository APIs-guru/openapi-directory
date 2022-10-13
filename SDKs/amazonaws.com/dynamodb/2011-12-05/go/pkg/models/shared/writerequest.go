package shared

type WriteRequest struct {
	DeleteRequest *DeleteRequest `json:"DeleteRequest"`
	PutRequest    *PutRequest    `json:"PutRequest"`
}
