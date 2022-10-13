package shared

type LocalSecondaryIndexDescription struct {
	IndexArn       *string            `json:"IndexArn"`
	IndexName      *string            `json:"IndexName"`
	IndexSizeBytes *int64             `json:"IndexSizeBytes"`
	ItemCount      *int64             `json:"ItemCount"`
	KeySchema      []KeySchemaElement `json:"KeySchema"`
	Projection     *Projection        `json:"Projection"`
}
