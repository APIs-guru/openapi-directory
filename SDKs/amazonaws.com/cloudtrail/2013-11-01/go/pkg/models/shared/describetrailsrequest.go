package shared

type DescribeTrailsRequest struct {
	IncludeShadowTrails *bool    `json:"includeShadowTrails"`
	TrailNameList       []string `json:"trailNameList"`
}
