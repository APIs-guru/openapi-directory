package shared

type DistributionConfigurationSummary struct {
	Arn         *string           `json:"arn"`
	DateCreated *string           `json:"dateCreated"`
	DateUpdated *string           `json:"dateUpdated"`
	Description *string           `json:"description"`
	Name        *string           `json:"name"`
	Regions     []string          `json:"regions"`
	Tags        map[string]string `json:"tags"`
}
