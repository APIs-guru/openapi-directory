package shared



type GetApisResponse struct {
    Items []API `json:"Items,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

