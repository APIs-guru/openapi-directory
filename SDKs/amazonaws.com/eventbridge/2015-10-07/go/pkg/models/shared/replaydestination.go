package shared



type ReplayDestination struct {
    Arn string `json:"Arn"`
    FilterArns []string `json:"FilterArns,omitempty"`
    
}

