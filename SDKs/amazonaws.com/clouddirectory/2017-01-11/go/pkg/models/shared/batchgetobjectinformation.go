package shared

// BatchGetObjectInformation
// Retrieves metadata about an object inside a <a>BatchRead</a> operation. For more information, see <a>GetObjectInformation</a> and <a>BatchReadRequest$Operations</a>.
type BatchGetObjectInformation struct {
	ObjectReference ObjectReference `json:"ObjectReference"`
}
