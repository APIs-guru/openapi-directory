package shared

type ObjectAttributeAction struct {
	ObjectAttributeActionType  *UpdateActionTypeEnum `json:"ObjectAttributeActionType"`
	ObjectAttributeUpdateValue *TypedAttributeValue  `json:"ObjectAttributeUpdateValue"`
}
