package shared

// ObjectIdentifierAndLinkNameTuple
// A pair of ObjectIdentifier and LinkName.
type ObjectIdentifierAndLinkNameTuple struct {
	LinkName         *string `json:"LinkName,omitempty"`
	ObjectIdentifier *string `json:"ObjectIdentifier,omitempty"`
}
