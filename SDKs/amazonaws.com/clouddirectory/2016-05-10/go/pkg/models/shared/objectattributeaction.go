package shared

// ObjectAttributeAction
// The action to take on the object attribute.
type ObjectAttributeAction struct {
	ObjectAttributeActionType  *UpdateActionTypeEnum `json:"ObjectAttributeActionType,omitempty"`
	ObjectAttributeUpdateValue *TypedAttributeValue  `json:"ObjectAttributeUpdateValue,omitempty"`
}
