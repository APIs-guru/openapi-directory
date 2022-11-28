package shared

// TrailInfo
// Information about a CloudTrail trail, including the trail's name, home region, and Amazon Resource Name (ARN).
type TrailInfo struct {
	HomeRegion *string `json:"HomeRegion,omitempty"`
	Name       *string `json:"Name,omitempty"`
	TrailArn   *string `json:"TrailARN,omitempty"`
}
