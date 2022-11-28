package shared

// Trail
// Contains details about the CloudTrail trail being analyzed to generate a policy.
type Trail struct {
	AllRegions    *bool    `json:"allRegions,omitempty"`
	CloudTrailArn string   `json:"cloudTrailArn"`
	Regions       []string `json:"regions,omitempty"`
}
