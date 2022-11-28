package shared

// BatchUpdateObjectAttributes
// Represents the output of a <code>BatchUpdate</code> operation.
type BatchUpdateObjectAttributes struct {
	AttributeUpdates []ObjectAttributeUpdate `json:"AttributeUpdates"`
	ObjectReference  ObjectReference         `json:"ObjectReference"`
}
