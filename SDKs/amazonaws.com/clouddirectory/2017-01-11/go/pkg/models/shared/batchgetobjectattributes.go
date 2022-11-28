package shared

// BatchGetObjectAttributes
// Retrieves attributes within a facet that are associated with an object inside an <a>BatchRead</a> operation. For more information, see <a>GetObjectAttributes</a> and <a>BatchReadRequest$Operations</a>.
type BatchGetObjectAttributes struct {
	AttributeNames  []string        `json:"AttributeNames"`
	ObjectReference ObjectReference `json:"ObjectReference"`
	SchemaFacet     SchemaFacet     `json:"SchemaFacet"`
}
