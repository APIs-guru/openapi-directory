package shared

// BatchAttachObject
// Represents the output of an <a>AttachObject</a> operation.
type BatchAttachObject struct {
	ChildReference  ObjectReference `json:"ChildReference"`
	LinkName        string          `json:"LinkName"`
	ParentReference ObjectReference `json:"ParentReference"`
}
