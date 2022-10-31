package shared

type BatchGetObjectAttributes struct {
	AttributeNames  []string        `json:"AttributeNames"`
	ObjectReference ObjectReference `json:"ObjectReference"`
	SchemaFacet     SchemaFacet     `json:"SchemaFacet"`
}
