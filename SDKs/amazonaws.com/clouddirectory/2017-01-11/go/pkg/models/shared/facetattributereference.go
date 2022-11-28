package shared

// FacetAttributeReference
// The facet attribute reference that specifies the attribute definition that contains the attribute facet name and attribute name.
type FacetAttributeReference struct {
	TargetAttributeName string `json:"TargetAttributeName"`
	TargetFacetName     string `json:"TargetFacetName"`
}
