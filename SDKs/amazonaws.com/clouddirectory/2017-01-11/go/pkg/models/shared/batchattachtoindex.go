package shared

// BatchAttachToIndex
// Attaches the specified object to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>AttachToIndex</a> and <a>BatchReadRequest$Operations</a>.
type BatchAttachToIndex struct {
	IndexReference  ObjectReference `json:"IndexReference"`
	TargetReference ObjectReference `json:"TargetReference"`
}
