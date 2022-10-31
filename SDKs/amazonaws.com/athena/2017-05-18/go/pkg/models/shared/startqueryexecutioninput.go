package shared



type StartQueryExecutionInput struct {
    ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
    QueryExecutionContext *QueryExecutionContext `json:"QueryExecutionContext,omitempty"`
    QueryString string `json:"QueryString"`
    ResultConfiguration *ResultConfiguration `json:"ResultConfiguration,omitempty"`
    WorkGroup *string `json:"WorkGroup,omitempty"`
    
}

