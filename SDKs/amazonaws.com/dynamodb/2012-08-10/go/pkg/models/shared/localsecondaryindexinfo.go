package shared

// LocalSecondaryIndexInfo
// Represents the properties of a local secondary index for the table when the backup was created.
type LocalSecondaryIndexInfo struct {
	IndexName  *string            `json:"IndexName,omitempty"`
	KeySchema  []KeySchemaElement `json:"KeySchema,omitempty"`
	Projection *Projection        `json:"Projection,omitempty"`
}
