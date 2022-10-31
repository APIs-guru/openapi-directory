package shared



type Location struct {
    DynamoDb []CodeGenNodeArg `json:"DynamoDB,omitempty"`
    Jdbc []CodeGenNodeArg `json:"Jdbc,omitempty"`
    S3 []CodeGenNodeArg `json:"S3,omitempty"`
    
}

