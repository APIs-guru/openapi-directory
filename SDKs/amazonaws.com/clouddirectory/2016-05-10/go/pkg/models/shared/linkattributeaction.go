package shared

// LinkAttributeAction
// The action to take on a typed link attribute value. Updates are only supported for attributes which don’t contribute to link identity.
type LinkAttributeAction struct {
	AttributeActionType  *UpdateActionTypeEnum `json:"AttributeActionType,omitempty"`
	AttributeUpdateValue *TypedAttributeValue  `json:"AttributeUpdateValue,omitempty"`
}
