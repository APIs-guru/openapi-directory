package shared

type BatchCreateIndex struct {
	BatchReferenceName          *string          `json:"BatchReferenceName"`
	IsUnique                    bool             `json:"IsUnique"`
	LinkName                    *string          `json:"LinkName"`
	OrderedIndexedAttributeList []AttributeKey   `json:"OrderedIndexedAttributeList"`
	ParentReference             *ObjectReference `json:"ParentReference"`
}
