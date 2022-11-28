package shared

// DescribeTrailsResponse
// Returns the objects or data listed below if successful. Otherwise, returns an error.
type DescribeTrailsResponse struct {
	TrailList []Trail `json:"trailList,omitempty"`
}
