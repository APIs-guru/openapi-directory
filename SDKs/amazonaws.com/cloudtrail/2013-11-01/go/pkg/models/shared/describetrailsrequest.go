package shared

// DescribeTrailsRequest
// Returns information about the trail.
type DescribeTrailsRequest struct {
	IncludeShadowTrails *bool    `json:"includeShadowTrails,omitempty"`
	TrailNameList       []string `json:"trailNameList,omitempty"`
}
