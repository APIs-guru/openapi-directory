package shared

// LocalSecondaryIndex
// Represents the properties of a local secondary index.
type LocalSecondaryIndex struct {
	IndexName  string             `json:"IndexName"`
	KeySchema  []KeySchemaElement `json:"KeySchema"`
	Projection Projection         `json:"Projection"`
}
