package shared

type BatchCreateIndex struct {
	BatchReferenceName          *string          `json:"BatchReferenceName,omitempty"`
	IsUnique                    bool             `json:"IsUnique"`
	LinkName                    *string          `json:"LinkName,omitempty"`
	OrderedIndexedAttributeList []AttributeKey   `json:"OrderedIndexedAttributeList"`
	ParentReference             *ObjectReference `json:"ParentReference,omitempty"`
}
