package shared

type DescribeScalingPlansRequest struct {
	ApplicationSources []ApplicationSource `json:"ApplicationSources"`
	MaxResults         *int64              `json:"MaxResults"`
	NextToken          *string             `json:"NextToken"`
	ScalingPlanNames   []string            `json:"ScalingPlanNames"`
	ScalingPlanVersion *int64              `json:"ScalingPlanVersion"`
}
