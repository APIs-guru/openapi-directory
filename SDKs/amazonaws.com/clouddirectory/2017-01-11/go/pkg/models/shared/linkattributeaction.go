package shared

type LinkAttributeAction struct {
	AttributeActionType  *UpdateActionTypeEnum `json:"AttributeActionType"`
	AttributeUpdateValue *TypedAttributeValue  `json:"AttributeUpdateValue"`
}
