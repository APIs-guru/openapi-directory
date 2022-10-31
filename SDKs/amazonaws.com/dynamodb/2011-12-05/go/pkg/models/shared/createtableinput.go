package shared

type CreateTableInput struct {
	KeySchema             KeySchema             `json:"KeySchema"`
	ProvisionedThroughput ProvisionedThroughput `json:"ProvisionedThroughput"`
	TableName             string                `json:"TableName"`
}
