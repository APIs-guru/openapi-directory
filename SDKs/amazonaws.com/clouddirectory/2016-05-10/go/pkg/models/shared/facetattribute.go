package shared

type FacetAttribute struct {
	AttributeDefinition *FacetAttributeDefinition      `json:"AttributeDefinition"`
	AttributeReference  *FacetAttributeReference       `json:"AttributeReference"`
	Name                string                         `json:"Name"`
	RequiredBehavior    *RequiredAttributeBehaviorEnum `json:"RequiredBehavior"`
}
