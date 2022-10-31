package shared



type OrganizationAggregationSource struct {
    AllAwsRegions *bool `json:"AllAwsRegions,omitempty"`
    AwsRegions []string `json:"AwsRegions,omitempty"`
    RoleArn string `json:"RoleArn"`
    
}

