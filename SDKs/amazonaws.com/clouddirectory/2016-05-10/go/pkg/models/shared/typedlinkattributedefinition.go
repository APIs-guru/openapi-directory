package shared

type TypedLinkAttributeDefinition struct {
	DefaultValue     *TypedAttributeValue          `json:"DefaultValue"`
	IsImmutable      *bool                         `json:"IsImmutable"`
	Name             string                        `json:"Name"`
	RequiredBehavior RequiredAttributeBehaviorEnum `json:"RequiredBehavior"`
	Rules            map[string]Rule               `json:"Rules"`
	Type             FacetAttributeTypeEnum        `json:"Type"`
}
