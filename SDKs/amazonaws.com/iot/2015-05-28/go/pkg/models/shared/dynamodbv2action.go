package shared



type DynamoDBv2Action struct {
    PutItem PutItemInput `json:"putItem"`
    RoleArn string `json:"roleArn"`
    
}

