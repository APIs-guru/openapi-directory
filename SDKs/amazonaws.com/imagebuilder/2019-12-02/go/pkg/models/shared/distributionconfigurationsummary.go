package shared

// DistributionConfigurationSummary
// A high-level overview of a distribution configuration.
type DistributionConfigurationSummary struct {
	Arn         *string           `json:"arn,omitempty"`
	DateCreated *string           `json:"dateCreated,omitempty"`
	DateUpdated *string           `json:"dateUpdated,omitempty"`
	Description *string           `json:"description,omitempty"`
	Name        *string           `json:"name,omitempty"`
	Regions     []string          `json:"regions,omitempty"`
	Tags        map[string]string `json:"tags,omitempty"`
}
