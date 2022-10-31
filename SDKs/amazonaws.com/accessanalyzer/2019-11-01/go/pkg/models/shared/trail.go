package shared



type Trail struct {
    AllRegions *bool `json:"allRegions,omitempty"`
    CloudTrailArn string `json:"cloudTrailArn"`
    Regions []string `json:"regions,omitempty"`
    
}

