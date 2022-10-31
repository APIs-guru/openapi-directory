package shared



type SelectResourceConfigRequest struct {
    Expression string `json:"Expression"`
    Limit *int64 `json:"Limit,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

