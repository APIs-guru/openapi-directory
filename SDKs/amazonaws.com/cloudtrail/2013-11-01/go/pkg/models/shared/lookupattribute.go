package shared

// LookupAttribute
// Specifies an attribute and value that filter the events returned.
type LookupAttribute struct {
	AttributeKey   LookupAttributeKeyEnum `json:"AttributeKey"`
	AttributeValue string                 `json:"AttributeValue"`
}
