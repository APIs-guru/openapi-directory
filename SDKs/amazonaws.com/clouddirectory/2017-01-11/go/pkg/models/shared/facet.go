package shared

type Facet struct {
	FacetStyle *FacetStyleEnum `json:"FacetStyle,omitempty"`
	Name       *string         `json:"Name,omitempty"`
	ObjectType *ObjectTypeEnum `json:"ObjectType,omitempty"`
}
