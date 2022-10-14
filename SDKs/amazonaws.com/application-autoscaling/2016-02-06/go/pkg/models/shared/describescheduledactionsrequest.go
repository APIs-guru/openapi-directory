package shared

type DescribeScheduledActionsRequest struct {
	MaxResults           *int64                 `json:"MaxResults,omitempty"`
	NextToken            *string                `json:"NextToken,omitempty"`
	ResourceID           *string                `json:"ResourceId,omitempty"`
	ScalableDimension    *ScalableDimensionEnum `json:"ScalableDimension,omitempty"`
	ScheduledActionNames []string               `json:"ScheduledActionNames,omitempty"`
	ServiceNamespace     ServiceNamespaceEnum   `json:"ServiceNamespace"`
}
