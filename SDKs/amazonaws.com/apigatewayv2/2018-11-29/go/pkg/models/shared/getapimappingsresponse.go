package shared



type GetAPIMappingsResponse struct {
    Items []APIMapping `json:"Items,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

