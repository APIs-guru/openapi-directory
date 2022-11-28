package shared

// Facet
// A structure that contains <code>Name</code>, <code>ARN</code>, <code>Attributes</code>, <code> <a>Rule</a>s</code>, and <code>ObjectTypes</code>. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_whatarefacets.html">Facets</a> for more information.
type Facet struct {
	FacetStyle *FacetStyleEnum `json:"FacetStyle,omitempty"`
	Name       *string         `json:"Name,omitempty"`
	ObjectType *ObjectTypeEnum `json:"ObjectType,omitempty"`
}
