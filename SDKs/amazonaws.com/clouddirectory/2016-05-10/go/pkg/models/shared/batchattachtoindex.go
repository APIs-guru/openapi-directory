package shared

type BatchAttachToIndex struct {
	IndexReference  ObjectReference `json:"IndexReference"`
	TargetReference ObjectReference `json:"TargetReference"`
}
