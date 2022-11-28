package shared

// BatchDetachFromIndex
// Detaches the specified object from the specified index inside a <a>BatchRead</a> operation. For more information, see <a>DetachFromIndex</a> and <a>BatchReadRequest$Operations</a>.
type BatchDetachFromIndex struct {
	IndexReference  ObjectReference `json:"IndexReference"`
	TargetReference ObjectReference `json:"TargetReference"`
}
