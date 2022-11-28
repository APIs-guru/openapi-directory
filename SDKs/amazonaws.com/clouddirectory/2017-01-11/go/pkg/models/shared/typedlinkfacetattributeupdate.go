package shared

// TypedLinkFacetAttributeUpdate
// A typed link facet attribute update.
type TypedLinkFacetAttributeUpdate struct {
	Action    UpdateActionTypeEnum         `json:"Action"`
	Attribute TypedLinkAttributeDefinition `json:"Attribute"`
}
