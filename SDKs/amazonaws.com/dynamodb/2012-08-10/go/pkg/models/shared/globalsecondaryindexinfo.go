package shared

type GlobalSecondaryIndexInfo struct {
	IndexName             *string                `json:"IndexName"`
	KeySchema             []KeySchemaElement     `json:"KeySchema"`
	Projection            *Projection            `json:"Projection"`
	ProvisionedThroughput *ProvisionedThroughput `json:"ProvisionedThroughput"`
}
