package shared



type DescribeFleetAttributesInput struct {
    FleetIds []string `json:"FleetIds,omitempty"`
    Limit *int64 `json:"Limit,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

