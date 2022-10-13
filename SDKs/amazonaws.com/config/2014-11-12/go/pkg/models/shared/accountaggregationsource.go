package shared

type AccountAggregationSource struct {
	AccountIds    []string `json:"AccountIds"`
	AllAwsRegions *bool    `json:"AllAwsRegions"`
	AwsRegions    []string `json:"AwsRegions"`
}
