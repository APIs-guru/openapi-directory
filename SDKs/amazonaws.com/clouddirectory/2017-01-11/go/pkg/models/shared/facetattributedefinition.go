package shared

type FacetAttributeDefinition struct {
	DefaultValue *TypedAttributeValue   `json:"DefaultValue,omitempty"`
	IsImmutable  *bool                  `json:"IsImmutable,omitempty"`
	Rules        map[string]Rule        `json:"Rules,omitempty"`
	Type         FacetAttributeTypeEnum `json:"Type"`
}
