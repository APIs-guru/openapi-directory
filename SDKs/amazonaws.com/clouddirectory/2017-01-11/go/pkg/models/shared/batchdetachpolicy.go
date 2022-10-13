package shared

type BatchDetachPolicy struct {
	ObjectReference ObjectReference `json:"ObjectReference"`
	PolicyReference ObjectReference `json:"PolicyReference"`
}
