package shared

type DescribeTagsRequest struct {
	Filters    []TagFilter `json:"filters,omitempty"`
	MaxResults *int64      `json:"maxResults,omitempty"`
	NextToken  *string     `json:"nextToken,omitempty"`
}
