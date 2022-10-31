package shared

type TypedLinkAttributeDefinition struct {
	DefaultValue     *TypedAttributeValue          `json:"DefaultValue,omitempty"`
	IsImmutable      *bool                         `json:"IsImmutable,omitempty"`
	Name             string                        `json:"Name"`
	RequiredBehavior RequiredAttributeBehaviorEnum `json:"RequiredBehavior"`
	Rules            map[string]Rule               `json:"Rules,omitempty"`
	Type             FacetAttributeTypeEnum        `json:"Type"`
}
