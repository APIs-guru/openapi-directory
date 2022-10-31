package shared



type GetQueryResultsOutput struct {
    NextToken *string `json:"NextToken,omitempty"`
    ResultSet *ResultSet `json:"ResultSet,omitempty"`
    UpdateCount *int64 `json:"UpdateCount,omitempty"`
    
}

