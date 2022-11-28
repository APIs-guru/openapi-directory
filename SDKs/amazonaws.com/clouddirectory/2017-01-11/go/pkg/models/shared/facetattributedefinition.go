package shared

// FacetAttributeDefinition
// A facet attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.
type FacetAttributeDefinition struct {
	DefaultValue *TypedAttributeValue   `json:"DefaultValue,omitempty"`
	IsImmutable  *bool                  `json:"IsImmutable,omitempty"`
	Rules        map[string]Rule        `json:"Rules,omitempty"`
	Type         FacetAttributeTypeEnum `json:"Type"`
}
