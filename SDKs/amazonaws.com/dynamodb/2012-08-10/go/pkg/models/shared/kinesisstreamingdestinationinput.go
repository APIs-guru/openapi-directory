package shared



type KinesisStreamingDestinationInput struct {
    StreamArn string `json:"StreamArn"`
    TableName string `json:"TableName"`
    
}

