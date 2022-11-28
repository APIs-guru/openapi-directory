package shared

// BatchCreateIndex
// Creates an index object inside of a <a>BatchRead</a> operation. For more information, see <a>CreateIndex</a> and <a>BatchReadRequest$Operations</a>.
type BatchCreateIndex struct {
	BatchReferenceName          *string          `json:"BatchReferenceName,omitempty"`
	IsUnique                    bool             `json:"IsUnique"`
	LinkName                    *string          `json:"LinkName,omitempty"`
	OrderedIndexedAttributeList []AttributeKey   `json:"OrderedIndexedAttributeList"`
	ParentReference             *ObjectReference `json:"ParentReference,omitempty"`
}
