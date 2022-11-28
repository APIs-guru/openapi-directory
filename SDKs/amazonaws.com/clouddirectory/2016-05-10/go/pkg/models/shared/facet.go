package shared

// Facet
// A structure that contains <code>Name</code>, <code>ARN</code>, <code>Attributes</code>, <code> <a>Rule</a>s</code>, and <code>ObjectTypes</code>. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/whatarefacets.html">Facets</a> for more information.
type Facet struct {
	Name       *string         `json:"Name,omitempty"`
	ObjectType *ObjectTypeEnum `json:"ObjectType,omitempty"`
}
