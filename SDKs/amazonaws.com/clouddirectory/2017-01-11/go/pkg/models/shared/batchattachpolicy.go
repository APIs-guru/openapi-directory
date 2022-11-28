package shared

// BatchAttachPolicy
// Attaches a policy object to a regular object inside a <a>BatchRead</a> operation. For more information, see <a>AttachPolicy</a> and <a>BatchReadRequest$Operations</a>.
type BatchAttachPolicy struct {
	ObjectReference ObjectReference `json:"ObjectReference"`
	PolicyReference ObjectReference `json:"PolicyReference"`
}
