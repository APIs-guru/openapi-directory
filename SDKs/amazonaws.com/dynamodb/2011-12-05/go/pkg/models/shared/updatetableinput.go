package shared



type UpdateTableInput struct {
    ProvisionedThroughput ProvisionedThroughput `json:"ProvisionedThroughput"`
    TableName string `json:"TableName"`
    
}

