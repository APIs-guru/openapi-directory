package shared



type ObjectAttributeAction struct {
    ObjectAttributeActionType *UpdateActionTypeEnum `json:"ObjectAttributeActionType,omitempty"`
    ObjectAttributeUpdateValue *TypedAttributeValue `json:"ObjectAttributeUpdateValue,omitempty"`
    
}

