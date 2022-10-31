package shared

type PutConfigurationAggregatorRequest struct {
	AccountAggregationSources     []AccountAggregationSource     `json:"AccountAggregationSources,omitempty"`
	ConfigurationAggregatorName   string                         `json:"ConfigurationAggregatorName"`
	OrganizationAggregationSource *OrganizationAggregationSource `json:"OrganizationAggregationSource,omitempty"`
	Tags                          []Tag                          `json:"Tags,omitempty"`
}
