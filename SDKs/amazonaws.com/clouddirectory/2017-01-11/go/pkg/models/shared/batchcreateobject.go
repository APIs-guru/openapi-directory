package shared

type BatchCreateObject struct {
	BatchReferenceName  *string                `json:"BatchReferenceName"`
	LinkName            *string                `json:"LinkName"`
	ObjectAttributeList []AttributeKeyAndValue `json:"ObjectAttributeList"`
	ParentReference     *ObjectReference       `json:"ParentReference"`
	SchemaFacet         []SchemaFacet          `json:"SchemaFacet"`
}
