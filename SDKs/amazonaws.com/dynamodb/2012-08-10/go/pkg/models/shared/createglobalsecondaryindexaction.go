package shared

// CreateGlobalSecondaryIndexAction
// Represents a new global secondary index to be added to an existing table.
type CreateGlobalSecondaryIndexAction struct {
	IndexName             string                 `json:"IndexName"`
	KeySchema             []KeySchemaElement     `json:"KeySchema"`
	Projection            Projection             `json:"Projection"`
	ProvisionedThroughput *ProvisionedThroughput `json:"ProvisionedThroughput,omitempty"`
}
