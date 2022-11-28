package shared

// BatchDeleteObject
// Represents the output of a <a>DeleteObject</a> operation.
type BatchDeleteObject struct {
	ObjectReference ObjectReference `json:"ObjectReference"`
}
