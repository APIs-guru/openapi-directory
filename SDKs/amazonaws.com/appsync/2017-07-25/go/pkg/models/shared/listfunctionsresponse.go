package shared



type ListFunctionsResponse struct {
    Functions []FunctionConfiguration `json:"functions,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

