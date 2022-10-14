package shared

type ObjectTypeKey struct {
	FieldNames          []string                 `json:"FieldNames,omitempty"`
	StandardIdentifiers []StandardIdentifierEnum `json:"StandardIdentifiers,omitempty"`
}
