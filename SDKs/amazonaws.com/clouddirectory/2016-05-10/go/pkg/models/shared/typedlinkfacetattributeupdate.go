package shared

type TypedLinkFacetAttributeUpdate struct {
	Action    UpdateActionTypeEnum         `json:"Action"`
	Attribute TypedLinkAttributeDefinition `json:"Attribute"`
}
