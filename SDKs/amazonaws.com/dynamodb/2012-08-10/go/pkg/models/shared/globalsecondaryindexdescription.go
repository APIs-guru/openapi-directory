package shared

type GlobalSecondaryIndexDescription struct {
	Backfilling           *bool                             `json:"Backfilling"`
	IndexArn              *string                           `json:"IndexArn"`
	IndexName             *string                           `json:"IndexName"`
	IndexSizeBytes        *int64                            `json:"IndexSizeBytes"`
	IndexStatus           *IndexStatusEnum                  `json:"IndexStatus"`
	ItemCount             *int64                            `json:"ItemCount"`
	KeySchema             []KeySchemaElement                `json:"KeySchema"`
	Projection            *Projection                       `json:"Projection"`
	ProvisionedThroughput *ProvisionedThroughputDescription `json:"ProvisionedThroughput"`
}
