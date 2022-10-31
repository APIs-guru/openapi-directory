package shared



type GetUserDefinedFunctionsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    UserDefinedFunctions []UserDefinedFunction `json:"UserDefinedFunctions,omitempty"`
    
}

