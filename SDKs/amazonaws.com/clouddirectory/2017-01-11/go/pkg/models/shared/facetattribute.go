package shared

// FacetAttribute
// An attribute that is associated with the <a>Facet</a>.
type FacetAttribute struct {
	AttributeDefinition *FacetAttributeDefinition      `json:"AttributeDefinition,omitempty"`
	AttributeReference  *FacetAttributeReference       `json:"AttributeReference,omitempty"`
	Name                string                         `json:"Name"`
	RequiredBehavior    *RequiredAttributeBehaviorEnum `json:"RequiredBehavior,omitempty"`
}
