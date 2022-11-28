package shared

// GlobalSecondaryIndexInfo
// Represents the properties of a global secondary index for the table when the backup was created.
type GlobalSecondaryIndexInfo struct {
	IndexName             *string                `json:"IndexName,omitempty"`
	KeySchema             []KeySchemaElement     `json:"KeySchema,omitempty"`
	Projection            *Projection            `json:"Projection,omitempty"`
	ProvisionedThroughput *ProvisionedThroughput `json:"ProvisionedThroughput,omitempty"`
}
