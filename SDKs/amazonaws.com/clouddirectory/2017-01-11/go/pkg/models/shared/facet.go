package shared

type Facet struct {
	FacetStyle *FacetStyleEnum `json:"FacetStyle"`
	Name       *string         `json:"Name"`
	ObjectType *ObjectTypeEnum `json:"ObjectType"`
}
