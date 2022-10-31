package shared



type AccountAggregationSource struct {
    AccountIds []string `json:"AccountIds"`
    AllAwsRegions *bool `json:"AllAwsRegions,omitempty"`
    AwsRegions []string `json:"AwsRegions,omitempty"`
    
}

