package shared

type FacetAttributeDefinition struct {
	DefaultValue *TypedAttributeValue   `json:"DefaultValue"`
	IsImmutable  *bool                  `json:"IsImmutable"`
	Rules        map[string]Rule        `json:"Rules"`
	Type         FacetAttributeTypeEnum `json:"Type"`
}
