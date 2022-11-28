package shared

// BatchDetachObject
// Represents the output of a <a>DetachObject</a> operation.
type BatchDetachObject struct {
	BatchReferenceName *string         `json:"BatchReferenceName,omitempty"`
	LinkName           string          `json:"LinkName"`
	ParentReference    ObjectReference `json:"ParentReference"`
}
