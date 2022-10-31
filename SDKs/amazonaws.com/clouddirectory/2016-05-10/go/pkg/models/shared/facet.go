package shared

type Facet struct {
	Name       *string         `json:"Name,omitempty"`
	ObjectType *ObjectTypeEnum `json:"ObjectType,omitempty"`
}
