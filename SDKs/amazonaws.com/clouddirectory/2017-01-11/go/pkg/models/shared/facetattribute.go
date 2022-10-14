package shared

type FacetAttribute struct {
	AttributeDefinition *FacetAttributeDefinition      `json:"AttributeDefinition,omitempty"`
	AttributeReference  *FacetAttributeReference       `json:"AttributeReference,omitempty"`
	Name                string                         `json:"Name"`
	RequiredBehavior    *RequiredAttributeBehaviorEnum `json:"RequiredBehavior,omitempty"`
}
