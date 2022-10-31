package shared

type BatchDetachFromIndex struct {
	IndexReference  ObjectReference `json:"IndexReference"`
	TargetReference ObjectReference `json:"TargetReference"`
}
