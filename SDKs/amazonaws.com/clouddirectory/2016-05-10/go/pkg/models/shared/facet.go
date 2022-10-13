package shared

type Facet struct {
	Name       *string         `json:"Name"`
	ObjectType *ObjectTypeEnum `json:"ObjectType"`
}
