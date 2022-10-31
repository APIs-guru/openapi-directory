package shared



type ListDatabasesOutput struct {
    DatabaseList []Database `json:"DatabaseList,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

