package shared

type ObjectTypeKey struct {
	FieldNames          []string                 `json:"FieldNames"`
	StandardIdentifiers []StandardIdentifierEnum `json:"StandardIdentifiers"`
}
