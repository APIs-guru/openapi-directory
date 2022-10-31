package shared



type GetRoutesResponse struct {
    Items []Route `json:"Items,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

