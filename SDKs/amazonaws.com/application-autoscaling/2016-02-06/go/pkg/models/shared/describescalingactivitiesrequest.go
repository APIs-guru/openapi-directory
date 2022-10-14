package shared

type DescribeScalingActivitiesRequest struct {
	MaxResults        *int64                 `json:"MaxResults,omitempty"`
	NextToken         *string                `json:"NextToken,omitempty"`
	ResourceID        *string                `json:"ResourceId,omitempty"`
	ScalableDimension *ScalableDimensionEnum `json:"ScalableDimension,omitempty"`
	ServiceNamespace  ServiceNamespaceEnum   `json:"ServiceNamespace"`
}
