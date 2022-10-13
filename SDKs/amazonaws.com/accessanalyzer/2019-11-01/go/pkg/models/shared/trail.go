package shared

type Trail struct {
	AllRegions    *bool    `json:"allRegions"`
	CloudTrailArn string   `json:"cloudTrailArn"`
	Regions       []string `json:"regions"`
}
