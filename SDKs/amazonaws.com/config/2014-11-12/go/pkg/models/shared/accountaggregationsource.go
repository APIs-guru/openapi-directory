package shared

// AccountAggregationSource
// A collection of accounts and regions.
type AccountAggregationSource struct {
	AccountIds    []string `json:"AccountIds"`
	AllAwsRegions *bool    `json:"AllAwsRegions,omitempty"`
	AwsRegions    []string `json:"AwsRegions,omitempty"`
}
