package shared

// LocalSecondaryIndexDescription
// Represents the properties of a local secondary index.
type LocalSecondaryIndexDescription struct {
	IndexArn       *string            `json:"IndexArn,omitempty"`
	IndexName      *string            `json:"IndexName,omitempty"`
	IndexSizeBytes *int64             `json:"IndexSizeBytes,omitempty"`
	ItemCount      *int64             `json:"ItemCount,omitempty"`
	KeySchema      []KeySchemaElement `json:"KeySchema,omitempty"`
	Projection     *Projection        `json:"Projection,omitempty"`
}
