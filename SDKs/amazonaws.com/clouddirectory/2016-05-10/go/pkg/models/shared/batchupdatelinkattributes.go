package shared

type BatchUpdateLinkAttributes struct {
	AttributeUpdates   []LinkAttributeUpdate `json:"AttributeUpdates"`
	TypedLinkSpecifier TypedLinkSpecifier    `json:"TypedLinkSpecifier"`
}
