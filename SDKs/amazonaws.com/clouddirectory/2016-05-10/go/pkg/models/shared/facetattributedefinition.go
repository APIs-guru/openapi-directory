package shared

// FacetAttributeDefinition
// A facet attribute definition. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_advanced.html#attributereferences">Attribute References</a> for more information.
type FacetAttributeDefinition struct {
	DefaultValue *TypedAttributeValue   `json:"DefaultValue,omitempty"`
	IsImmutable  *bool                  `json:"IsImmutable,omitempty"`
	Rules        map[string]Rule        `json:"Rules,omitempty"`
	Type         FacetAttributeTypeEnum `json:"Type"`
}
