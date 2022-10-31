package shared



type ListFleetsOutput struct {
    FleetIds []string `json:"FleetIds,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

