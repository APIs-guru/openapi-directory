package shared



type ListEventBusesRequest struct {
    Limit *int64 `json:"Limit,omitempty"`
    NamePrefix *string `json:"NamePrefix,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

