package shared

type OrganizationAggregationSource struct {
	AllAwsRegions *bool    `json:"AllAwsRegions"`
	AwsRegions    []string `json:"AwsRegions"`
	RoleArn       string   `json:"RoleArn"`
}
