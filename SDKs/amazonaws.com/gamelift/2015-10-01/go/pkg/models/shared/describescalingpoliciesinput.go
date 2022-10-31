package shared



type DescribeScalingPoliciesInput struct {
    FleetID string `json:"FleetId"`
    Limit *int64 `json:"Limit,omitempty"`
    Location *string `json:"Location,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    StatusFilter *ScalingStatusTypeEnum `json:"StatusFilter,omitempty"`
    
}

