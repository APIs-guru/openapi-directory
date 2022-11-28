package shared

// AttributeValueUpdate
// Specifies the attribute to update and how to perform the update. Possible values: <code>PUT</code> (default), <code>ADD</code> or <code>DELETE</code>.
type AttributeValueUpdate struct {
	Action *AttributeActionEnum `json:"Action,omitempty"`
	Value  *AttributeValue      `json:"Value,omitempty"`
}
