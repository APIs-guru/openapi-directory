package shared

type DescribeScalableTargetsRequest struct {
	MaxResults        *int64                 `json:"MaxResults,omitempty"`
	NextToken         *string                `json:"NextToken,omitempty"`
	ResourceIds       []string               `json:"ResourceIds,omitempty"`
	ScalableDimension *ScalableDimensionEnum `json:"ScalableDimension,omitempty"`
	ServiceNamespace  ServiceNamespaceEnum   `json:"ServiceNamespace"`
}
