package shared

type DescribeTagsRequest struct {
	Filters    []TagFilter `json:"filters"`
	MaxResults *int64      `json:"maxResults"`
	NextToken  *string     `json:"nextToken"`
}
