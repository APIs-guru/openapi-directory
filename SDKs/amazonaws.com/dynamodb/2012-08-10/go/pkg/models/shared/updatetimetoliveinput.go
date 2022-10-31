package shared



type UpdateTimeToLiveInput struct {
    TableName string `json:"TableName"`
    TimeToLiveSpecification TimeToLiveSpecification `json:"TimeToLiveSpecification"`
    
}

