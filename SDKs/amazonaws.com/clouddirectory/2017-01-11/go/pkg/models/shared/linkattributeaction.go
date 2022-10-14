package shared

type LinkAttributeAction struct {
	AttributeActionType  *UpdateActionTypeEnum `json:"AttributeActionType,omitempty"`
	AttributeUpdateValue *TypedAttributeValue  `json:"AttributeUpdateValue,omitempty"`
}
