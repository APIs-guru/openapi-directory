package shared

type ListDevEndpointsRequest struct {
	MaxResults *int64            `json:"MaxResults"`
	NextToken  *string           `json:"NextToken"`
	Tags       map[string]string `json:"Tags"`
}
