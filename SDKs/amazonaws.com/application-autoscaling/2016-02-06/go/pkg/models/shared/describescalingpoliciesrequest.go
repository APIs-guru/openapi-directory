package shared

type DescribeScalingPoliciesRequest struct {
	MaxResults        *int64                 `json:"MaxResults"`
	NextToken         *string                `json:"NextToken"`
	PolicyNames       []string               `json:"PolicyNames"`
	ResourceID        *string                `json:"ResourceId"`
	ScalableDimension *ScalableDimensionEnum `json:"ScalableDimension"`
	ServiceNamespace  ServiceNamespaceEnum   `json:"ServiceNamespace"`
}
