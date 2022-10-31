package shared



type BatchCreateObject struct {
    BatchReferenceName *string `json:"BatchReferenceName,omitempty"`
    LinkName *string `json:"LinkName,omitempty"`
    ObjectAttributeList []AttributeKeyAndValue `json:"ObjectAttributeList"`
    ParentReference *ObjectReference `json:"ParentReference,omitempty"`
    SchemaFacet []SchemaFacet `json:"SchemaFacet"`
    
}

