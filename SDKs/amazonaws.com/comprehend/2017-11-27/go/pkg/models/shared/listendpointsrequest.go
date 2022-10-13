package shared

type ListEndpointsRequest struct {
	Filter     *EndpointFilter `json:"Filter"`
	MaxResults *int64          `json:"MaxResults"`
	NextToken  *string         `json:"NextToken"`
}
