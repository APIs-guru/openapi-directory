package shared

type DescribeScalingPoliciesInput struct {
	FleetID      string                 `json:"FleetId"`
	Limit        *int64                 `json:"Limit"`
	Location     *string                `json:"Location"`
	NextToken    *string                `json:"NextToken"`
	StatusFilter *ScalingStatusTypeEnum `json:"StatusFilter"`
}
