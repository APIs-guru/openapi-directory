package shared

type PutConfigurationAggregatorRequest struct {
	AccountAggregationSources     []AccountAggregationSource     `json:"AccountAggregationSources"`
	ConfigurationAggregatorName   string                         `json:"ConfigurationAggregatorName"`
	OrganizationAggregationSource *OrganizationAggregationSource `json:"OrganizationAggregationSource"`
	Tags                          []Tag                          `json:"Tags"`
}
