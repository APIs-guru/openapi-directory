package shared

// BatchDetachPolicy
// Detaches the specified policy from the specified directory inside a <a>BatchWrite</a> operation. For more information, see <a>DetachPolicy</a> and <a>BatchWriteRequest$Operations</a>.
type BatchDetachPolicy struct {
	ObjectReference ObjectReference `json:"ObjectReference"`
	PolicyReference ObjectReference `json:"PolicyReference"`
}
