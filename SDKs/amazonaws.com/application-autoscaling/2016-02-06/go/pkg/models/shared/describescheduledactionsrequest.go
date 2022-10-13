package shared

type DescribeScheduledActionsRequest struct {
	MaxResults           *int64                 `json:"MaxResults"`
	NextToken            *string                `json:"NextToken"`
	ResourceID           *string                `json:"ResourceId"`
	ScalableDimension    *ScalableDimensionEnum `json:"ScalableDimension"`
	ScheduledActionNames []string               `json:"ScheduledActionNames"`
	ServiceNamespace     ServiceNamespaceEnum   `json:"ServiceNamespace"`
}
