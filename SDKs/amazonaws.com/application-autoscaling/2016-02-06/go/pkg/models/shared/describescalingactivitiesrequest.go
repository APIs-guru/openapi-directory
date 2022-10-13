package shared

type DescribeScalingActivitiesRequest struct {
	MaxResults        *int64                 `json:"MaxResults"`
	NextToken         *string                `json:"NextToken"`
	ResourceID        *string                `json:"ResourceId"`
	ScalableDimension *ScalableDimensionEnum `json:"ScalableDimension"`
	ServiceNamespace  ServiceNamespaceEnum   `json:"ServiceNamespace"`
}
