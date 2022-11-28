package shared

// ObjectTypeKey
// An object that defines the Key element of a ProfileObject. A Key is a special element that can be used to search for a customer profile.
type ObjectTypeKey struct {
	FieldNames          []string                 `json:"FieldNames,omitempty"`
	StandardIdentifiers []StandardIdentifierEnum `json:"StandardIdentifiers,omitempty"`
}
