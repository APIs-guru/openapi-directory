package shared

// GlobalSecondaryIndex
// Represents the properties of a global secondary index.
type GlobalSecondaryIndex struct {
	IndexName             string                 `json:"IndexName"`
	KeySchema             []KeySchemaElement     `json:"KeySchema"`
	Projection            Projection             `json:"Projection"`
	ProvisionedThroughput *ProvisionedThroughput `json:"ProvisionedThroughput,omitempty"`
}
