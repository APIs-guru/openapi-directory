package shared

type ListEndpointGroupsRequest struct {
	ListenerArn string  `json:"ListenerArn"`
	MaxResults  *int64  `json:"MaxResults"`
	NextToken   *string `json:"NextToken"`
}
