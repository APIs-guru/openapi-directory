package shared



type DescribeTrailsRequest struct {
    IncludeShadowTrails *bool `json:"includeShadowTrails,omitempty"`
    TrailNameList []string `json:"trailNameList,omitempty"`
    
}

