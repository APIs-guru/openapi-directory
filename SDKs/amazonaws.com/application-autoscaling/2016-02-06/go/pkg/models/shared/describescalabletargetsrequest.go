package shared

type DescribeScalableTargetsRequest struct {
	MaxResults        *int64                 `json:"MaxResults"`
	NextToken         *string                `json:"NextToken"`
	ResourceIds       []string               `json:"ResourceIds"`
	ScalableDimension *ScalableDimensionEnum `json:"ScalableDimension"`
	ServiceNamespace  ServiceNamespaceEnum   `json:"ServiceNamespace"`
}
