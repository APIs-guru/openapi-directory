package shared



type LookupEventsResponse struct {
    Events []Event `json:"Events,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

