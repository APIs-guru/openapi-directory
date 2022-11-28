package shared

// Filter
// A query filter used by <code>ListUsers</code> and <code>ListGroup</code>. This filter object provides the attribute name and attribute value to search users or groups.
type Filter struct {
	AttributePath  string `json:"AttributePath"`
	AttributeValue string `json:"AttributeValue"`
}
