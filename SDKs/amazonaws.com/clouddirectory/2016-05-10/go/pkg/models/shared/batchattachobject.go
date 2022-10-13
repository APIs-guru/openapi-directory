package shared

type BatchAttachObject struct {
	ChildReference  ObjectReference `json:"ChildReference"`
	LinkName        string          `json:"LinkName"`
	ParentReference ObjectReference `json:"ParentReference"`
}
